<template>
  <div>
    <AcademicFitReport :athlete="athlete_info" />
  </div>
</template>

<script>
import { useAthleteStore } from '@/stores/athleteStore';
import AcademicFitReport from '@/components/AcademicFitReport.vue';

export default {
  name: "App",
  components: {
    AcademicFitReport
  },
  setup() {
    const athleteStore = useAthleteStore();
    const athlete_info = athleteStore.athlete;

    // Example: Log the athlete's name
    console.log(athlete_info.report);

    // Example: Update the athlete's name
    setTimeout(() => {
      athleteStore.updateAthleteName("John Doe");
    }, 2000);

    return {
      athlete_info
    };
  }
};
</script>
