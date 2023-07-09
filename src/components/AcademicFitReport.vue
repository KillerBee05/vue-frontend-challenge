<template>
  <div>
    <div class="bg-blue-200 py-2 px-4 fixed top-0 left-0 right-0 z-10"></div>
    <div class="px-4 sm:px-8 md:px-4">
      <Header :athlete="athlete" />
      <Table :playerGpa="athlete.gpa" :report="athlete.report" />
      <Footer />
    </div>
    <div class="bg-blue-200 py-2 px-4 fixed bottom-0 left-0 right-0 z-10 mt-4"></div>
  </div>
</template>

<script>
import Table from './Table.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  name: "AcademicFitReport",
  components: { Header, Table, Footer },
  props: {
    athlete: {
      type: Object,
      required: false
    }
  }
};
</script>
