import { defineStore } from "pinia"
import { useSportsAPI } from "@/composables/useSportsAPI";

export const useSportsStore = defineStore("sports", {
    state: () => ({
        sports: [] as Array<object>,
    }),
    actions: {
        async getSports() {
            const { getSports } = useSportsAPI();
            this.sports = await getSports();
        }
    }
})