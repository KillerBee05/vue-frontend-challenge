<template>
  <table class="w-full">
    <thead>
      <tr>
        <th rowspan="2" class="bg-black text-white text-xs h-6 w-1/12">School Name</th>
        <th rowspan="2" class="bg-black text-white text-xs h-6 w-1/12">Athletic Div</th>
        <th rowspan="2" class="bg-black text-white text-xs h-6 w-1/12">Conference</th>
        <th rowspan="2" class="bg-black text-white text-xs h-6 w-2/12">
          <div class="w-full">Ranking*</div>
          <div class="w-full text-xs font-normal text-white">(DI NCAA)</div>
          <div class="w-full text-xs font-normal text-white">(DII &amp; DIII Hero Sports)</div>
        </th>
        <th colspan="5" class="bg-black text-white text-xs h-6 w-2/12">GPA</th>
        <th rowspan="2" class="bg-black text-white text-xs h-6 w-1/12">
          <div>SAT Reading***</div>
          <div>25%-75%</div>
        </th>
        <th rowspan="2" class="bg-black text-white text-xs h-6 w-1/12">
          <div>SAT Math***</div>
          <div>25%-75%</div>
        </th>
        <th rowspan="2" class="bg-black text-white text-xs h-6 w-1/12">
          <div>ACT Composite***</div>
          <div>25%-75%</div>
        </th>
      </tr>
      <tr>
        <th class="bg-black text-white text-xs h-6 w-1/24">Min</th>
        <th class="bg-black text-white text-xs h-6 w-1/24">25%</th>
        <th class="bg-black text-white text-xs h-6 w-1/24">50%</th>
        <th class="bg-black text-white text-xs h-6 w-1/24">75%</th>
        <th class="bg-black text-white text-xs h-6 w-1/24">Max</th>
      </tr>
    </thead>
    <tbody>
      <Row
        v-for="(item, index) in report"
        :key="item.school"
        :item="item"
        :index="index"
        :playerGpa="playerGpa"
        :class="index % 2 === 1 ? 'bg-blue-100' : ''"
      />
    </tbody>
  </table>
</template>

<script>
import Row from './Row.vue';

export default {
  props: {
    report: {
      type: Array,
      required: true,
    },
    playerGpa: {
      type: Number,
      required: true,
    },
  },
  components: {
    Row,
  },
};
</script>

<style scoped>
table {
  @apply w-full;
}

th {
  @apply bg-black text-white;
}
</style>
