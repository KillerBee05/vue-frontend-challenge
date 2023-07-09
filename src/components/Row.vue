<template>
  <tr>
    <td class="whitespace-nowrap text-xs">{{ item.school }}</td>
    <td class="whitespace-nowrap text-center text-xs">{{ item.division }}</td>
    <td class="whitespace-nowrap text-xs">{{ item.conference }}</td>
    <td class="whitespace-nowrap text-center text-xs">{{ item.ranking }}</td>
    <GpaColumn :gpa="item.gpa" :playerGpa="playerGpa" />
    <td class="whitespace-nowrap text-center text-xs">{{ getSatRange(item.sat.reading) }}</td>
    <td class="whitespace-nowrap text-center text-xs">{{ getSatRange(item.sat.math) }}</td>
    <td class="whitespace-nowrap text-center text-xs">{{ getActRange(item.act) }}</td>
  </tr>
</template>

<script>
import GpaColumn from './GpaColumn.vue';

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    playerGpa: {
      type: Number,
      required: true,
    },
  },
  components: {
    GpaColumn,
  },
  methods: {
    getSatRange(sat) {
      if (sat.min && sat.max) {
        return `${sat.min}-${sat.max}`;
      } else {
        return "Not Reported";
      }
    },
    getActRange(act) {
      if (act.min && act.max) {
        return `${act.min}-${act.max}`;
      } else {
        return "Not Reported";
      }
    },
  },
};
</script>
