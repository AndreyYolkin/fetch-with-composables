import { defu } from 'defu'
import { useAuthStore } from 'store/auth';

export const useApiFetch = (url: string, useFetchParams = {}) => {
    const config = useRuntimeConfig();
    const authStore = useAuthStore();
    const baseURL = config.public.baseURL
    const headers = {
        Authorization: `Bearer ${authStore.token}`
    }
    const options = defu(useFetchParams, { baseURL, headers })
    return new Promise((resolve, reject) => {
        $fetch(url, {
            ...options,
            onRequest: () => {
                console.log('onRequest')
            },
            onResponse: (data) => {
                console.log('onResponse')
                resolve(data)
            },
            // @ts-ignore
            onError: (error: any) => {
                console.log('onError')
                reject(error)
            }
        })
    })
}