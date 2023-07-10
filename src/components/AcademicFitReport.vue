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
  }
};
</script>


<template>
  <div>
    <div class="py-2 px-4 left-0 right-0 z-10" style="background-color: #00B4FF;"></div>
    <div class="px-4 sm:px-8 md:px-6">
      <Header :athlete="athlete" />
      <Table :playerGpa="athlete.gpa" :report="athlete.report" />
      <Footer />
    </div>
    <div class="py-2 px-4 left-0 right-0 z-10 mt-4" style="background-color: #00B4FF;"></div>
  </div>
</template>