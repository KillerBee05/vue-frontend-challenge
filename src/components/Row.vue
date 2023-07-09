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


<template>
  <tr>
    <td class="whitespace-nowrap text-xs py-2">{{ item.school }}</td>
    <td class="whitespace-nowrap text-center text-xs py-2">{{ item.division }}</td>
    <td class="whitespace-nowrap text-xs py-2">{{ item.conference }}</td>
    <td class="whitespace-nowrap text-center text-xs py-2">{{ item.ranking }}</td>
    <GpaColumn :gpa="item.gpa" :playerGpa="playerGpa" />
    <td class="whitespace-nowrap text-center text-xs py-2">{{ getSatRange(item.sat.reading) }}</td>
    <td class="whitespace-nowrap text-center text-xs py-2">{{ getSatRange(item.sat.math) }}</td>
    <td class="whitespace-nowrap text-center text-xs py-2">{{ getActRange(item.act) }}</td>
  </tr>

</template>

