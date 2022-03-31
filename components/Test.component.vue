<template>
    <Html lang="ja">
        <Head>
            <Title>{{ title }}</Title>
            <!-- <Meta name="description" :content="'${ title } page'"></Meta> -->
        </Head>
    </Html>
    <h1>{{ title }}</h1>
</template>

<script setup lang="ts">
useMeta({
    meta: [{
        name: "description"
        , content: '${title} page'
    }]
})

const title = "Hello Nuxt3!!"
</script>

<style scoped>
</style>
