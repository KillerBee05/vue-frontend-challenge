<script>
export default {
  name: "GpaColumn",
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
            return 'background-color: #d7737d';
          case difference > 0 && difference <= 0.10:
            return 'background-color: #c194b5';
          case difference === 0:
            return 'background-color: #b4a7d6';
          case difference < 0 && difference >= -0.10:
            return 'background-color: #a6a8da';
          case difference < -0.10:
            return 'background-color: #75ace5';
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
    :style="getGpaColorClass(column)"
    :class="['text-center', 'text-xs']"
  >
    {{ value.toFixed(2) }}
  </td>
</template>

