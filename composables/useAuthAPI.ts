import { useApiFetch } from './useApiFetch';

export interface IUserRegisterData {
    'first_name': string
    'last_name': string
    'email': string
    'phone': string
    'password': string
    'roles': string[]
    'company_inn'?: string | number
    'company_link'?: string
  }
  
  export interface IUserLoginData {
    'email': string
    'password': string
  }
  
  export interface IUserResetData {
    'email': string
    'token': string
    'password': string
  }
  
  export interface IEmailRestoreData {
    'email': string
  }

export const useAuthAPI = () => {
    const register = (data: IUserRegisterData) => {
        return useApiFetch('user/register', {
            method: 'post',
            body: data,
        })
    }
    const login = (data: IUserLoginData) => {
        return useApiFetch('auth/login', {
            method: 'post',
            body: data,
        })
    }
    const passwordReset = (data: IUserResetData) => {
        return useApiFetch('/user/password/reset', {
            method: 'post',
            body: data,
        })
    }
    const restore = (data: IEmailRestoreData) => {
        return useApiFetch('user/password/forgot', {
            method: 'post',
            body: data,
        })
    }
    return {
        register,
        login,
        passwordReset,
        restore
    }
}