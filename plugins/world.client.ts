// import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin(nuxtApp => {
    console.log('world test')
    nuxtApp.hook('app:mounted', () => console.log('App mounted client'))

})
