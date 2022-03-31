import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    // 初期設定
    ssr: false,
    target: 'static',
    // TS　Strict type checks
    typescript: {
        strict: true
    }
})
