<script>
export default {
  props: {
    gpa: {
      type: Object,
      required: true,
    },
    playerGpa: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getGpaColorClass(column) {
      if (column === '50%') {
        const columnGpa = this.gpa[column];
        const difference = columnGpa - this.playerGpa;

        switch (true) {
          case difference > 0.10:
            return 'bg-red-500';
          case difference > 0 && difference <= 0.10:
            return 'bg-purple-500';
          case difference === 0:
            return 'bg-indigo-500';
          case difference < 0 && difference >= -0.10:
            return 'bg-blue-500';
          case difference < -0.10:
            return 'bg-blue-300';
          default:
            return '';
        }
      }

      return '';
    }
  },
};
</script>

<template>
  <td
    v-for="(value, column) in gpa"
    :key="column"
    :class="['text-center', 'text-xs', getGpaColorClass(column)]"
  >
    {{ value.toFixed(2) }}
  </td>
</template>

