import { defineStore } from 'pinia';
import AthleteData from '@/assets/data.json';

export const useAthleteStore = defineStore('AthleteStore', {
  state: () => ({
    athlete: AthleteData.data[0],
  }),
  actions: {
    updateName(newName) {
      this.athlete.name = newName;
    },
  },
});
