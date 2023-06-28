import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    public: {
      // jsonplaceholder: 'https://jsonplaceholder.typicode.com',
      base: 'https://jsonplaceholder.typicode.com',
    }
  },
})
