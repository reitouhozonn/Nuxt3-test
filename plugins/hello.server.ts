import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.hook('app:mounted', () => console.log('App mounted server'))
    console.log('hello server test')
})
