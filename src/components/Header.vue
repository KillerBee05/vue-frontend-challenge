<template>
  <div class="flex items-center mt-20 mb-12">
    <div class="mr-4">
      <div v-if="!athlete.profile_image" class="w-24 h-24 rounded-full flex items-center justify-center" :style="getInitialsBgStyle(athlete.name)">
        <span class="text-white text-3xl font-bold">{{ getInitials(athlete.name) }}</span>
      </div>
      <img v-else class="w-24 h-24 rounded-full mt-1"  :src="athlete.profile_image" alt="Avatar" />
    </div>
    <div class="flex flex-col">
      <div class="flex items-center">
       <h2 v-if="!editingName" class="mb-1 mt-1 text-xl font-bold text-blue-500">{{ athlete.name }}</h2>
        <input v-else class="mb-1 mt-1 text-xl font-bold text-blue-500" type="text" v-model="editedName" />
        <button class="ml-4 bg-blue-500 text-white px-2 py-1 rounded-md text-sm" @click="toggleNameEditing">
          {{ editingName ? 'Save' : 'Edit' }}
        </button>
      </div>
      <div class="flex">
        <ul class="mr-10">
          <li>
            <label class="font-bold">Sport:</label>
            {{ athlete.sport }}
          </li>
          <li>
            <label class="font-bold">Class:</label>
            {{ athlete.grad_year }}
          </li>
          <li>
            <label class="font-bold">Club:</label>
            {{ athlete.club.name }}
          </li>
        </ul>
        <ul class="ml-8">
          <li>
            <label class="font-bold">High School:</label>
            {{ athlete.high_school.name }}
          </li>
          <li>
            <label class="font-bold">GPA:</label>
            {{ athlete.gpa }}
          </li>
          <li>
            <label class="font-bold">Desired Major:</label>
            {{ athlete.major }}
          </li>
        </ul>
      </div>
    </div>
     <div class="flex items-center ml-auto">
      <img class="w-10 h-10" src="logo-placeholder.png" alt="Logo" />
    </div>
  </div>
</template>

<script>

export default {
  name: "Header",
  props: {
    athlete: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      editingName: false,
      editedName: '',
    };
  },
  methods: {
    getInitials(name) {
      const initials = name.match(/\b(\w)/g);
      return initials ? initials.join("") : "";
    },
    getInitialsBgStyle() {
      const colors = ["#f1603c", "#6082fa", "#827cb8", "#0097a4", "#ffe066", "#ffa94d"];
      const randomIndex = Math.floor(Math.random() * colors.length);
      const randomColor = colors[randomIndex];
      return `background-color: ${randomColor}`;
    },
    toggleNameEditing() {
      if (this.editingName) {
        athleteStore.updateName(this.editedName);
        this.editingName = false;
      } else {
        this.editingName = true;
        this.editedName = athleteStore.name;
      }
    },
  },
};
</script>
