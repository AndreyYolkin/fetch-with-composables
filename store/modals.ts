import { defineStore } from 'pinia'

export type TModalType = 'login' | 'register' | 'restore'

export const useModalsStore = defineStore('modals', {
  state: () => {
    return {
      login: false,
      register: false,
      restore: false,
    }
  },

  actions: {
    showModal(modal: TModalType) {
      this.closeModals()
      this[modal] = true
    },
    closeModal(modal: TModalType) {
      this[modal] = false
    },
    closeModals() {
      this.login = false
      this.register = false
      this.restore = false
    },
  },
})
