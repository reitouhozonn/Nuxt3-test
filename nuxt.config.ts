import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    // 初期設定
    ssr: false,
    target: 'static',
    // TS　Strict type checks
    // console=> npx nuxi typecheck
    typescript: {
        strict: false
    },
    modules: [
        '@nuxt/ui'
    ]
})

module.exports = {

    loading: {
        color: 'red',
        failedColor: 'red',
        height: '5px'
    },
    head: {
        title: 'Test',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '{{escape description }}' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ]
    },
    meta: {
        htmlAttrs: {
            lang: 'ja',
            // 'data-theme': "cupcake"
        },
        title: "Nuxt3 Test",
        meta: [
            { charset: "utf8" },
            { name: 'viewport', content: "width=device-width, initial-scale=1" }
        ],
        link: [
            { ref: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
}
