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
        // not sure yet
    },
   getClosestGpaColumn() {
      const tolerance = 0.10;
      let closestColumn = null;
      let closestDifference = Infinity;

      for (const column in this.gpa) {
        const columnGpa = this.gpa[column];
        const difference = Math.abs(columnGpa - this.playerGpa);

        if (difference <= tolerance && difference < closestDifference) {
          closestDifference = difference;
          closestColumn = column;
        }
      }

      return closestColumn;
    },
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

