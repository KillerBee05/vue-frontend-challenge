<script>
import Table from './Table.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  name: 'AcademicFitReport',
  components: { Header, Table, Footer },
  props: {
    athlete: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log('athlete_info prop:', this.athlete_info);
  }
};
</script>


<template>
  <div>
    <div class="bg-blue-200 py-2 px-4 left-0 right-0 z-10"></div>
    <div class="px-4 sm:px-8 md:px-4">
      <Header :athlete="athlete" />
      <Table :playerGpa="athlete.gpa" :report="athlete.report" />
      <Footer />
    </div>
    <div class="bg-blue-200 py-2 px-4 left-0 right-0 z-10 mt-4"></div>
  </div>
</template>