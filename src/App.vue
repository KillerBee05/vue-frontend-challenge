<template>
  <div>
    <AcademicFitReport :athlete="athlete_info" />
  </div>
</template>

<script>
import { useAthleteStore } from '@/stores/AthleteStore';
import AcademicFitReport from '@/components/AcademicFitReport.vue';

export default {
  name: "App",
  components: {
    AcademicFitReport
  },
  setup() {
    const athleteStore = useAthleteStore();
    const athlete_info = athleteStore.athlete;

    return {
      athlete_info
    };
  }
};
</script>
