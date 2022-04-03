import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    // 初期設定
    ssr: true,
    target: 'static',
    // TS　Strict type checks
    // console=> npx nuxi typecheck
    typescript: {
        strict: false
    }
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
    config:
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    {
        apiKey: "AIzaSyBRp3m608j_RU0Buo6f9dQ9ha8kphUd9rI",
        authDomain: "testfirebase-1c38f.firebaseapp.com",
        projectId: "testfirebase-1c38f",
        storageBucket: "testfirebase-1c38f.appspot.com",
        messagingSenderId: "370775795093",
        appId: "1:370775795093:web:a2447ce95fb4555a9c029c",
        measurementId: "G-HXW76XQ9DP"
    },
    services: {
        firestone: true,
        analytics: true,
    }
}
