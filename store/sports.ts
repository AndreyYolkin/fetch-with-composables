import { defineStore } from "pinia"
import { useAPI } from "@/composables/useAPI";

export const useSportsStore = defineStore("sports", {
    state: () => ({
        sports: [] as Array<object>,
    }),
    actions: {
        async getSports() {
            const { getSports } = useAPI();
            this.sports = await getSports();
        }
    }
})