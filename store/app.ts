import { defineStore } from 'pinia'
import AppApi from '@/services/AppApi'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      sportTypesDropdown: [],
    }
  },

  actions: {
    async loadSportTypes() {
      if (this.sportTypesDropdown.length)
        return

      try {
        const result: any = await AppApi.loadSportTypes()
        this.sportTypesDropdown = result.sport_types?.reduce((acc: any, item: any) => {
          return [...acc, {
            title: item.title,
            type: item.type,
            icon_svg: item.icon_svg,
          }]
        }, [])

        return result
      }
      catch (error) {
        console.error(error)
      }

      return null
    },
  },
})
