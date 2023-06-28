import { defineStore } from 'pinia'
import type {
  IEmailRestoreData,
  IUserLoginData,
  IUserRegisterData,
  IUserResetData,
} from '@/composables/useAuthAPI'
import { useAuthAPI } from '@/composables/useAuthAPI'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: '',
    }
  },

  getters: {
    isAuthed: (state): boolean => !!state.token,
  },

  actions: {
    setToken(token: string) {
      this.token = token
    },

    async doRegister(data: IUserRegisterData) {
      const { register } = useAuthAPI()
      const result: any = await register(data)
      if (result.token)
        this.setToken(result.token)

      return result
    },

    async doLogin(data: IUserLoginData) {
      const { login } = useAuthAPI()
      const result: any = await login(data)

      if (result.token)
        this.setToken(result.token)

      return result
    },

    async doPasswordReset(data: IUserResetData) {
      const { passwordReset } = useAuthAPI()
      const result: any = await passwordReset(data)

      return result
    },

    async doRestore(data: IEmailRestoreData) {
      const { restore } = useAuthAPI()
      const result: any = await restore(data)

      return result
    },
  },
})
