<script setup lang="ts">

useMeta({
    meta: [{
        name: "description"
        , content: '${title} page'
    }]
})

const title = "Hello Nuxt3!!"


const { data: users }: any = await useFetch("/api/users");
</script>





<template>
    <Html lang="ja">
        <Head>
            <Title>{{ title }}</Title>
            <!-- <Meta name="description" :content="'${ title } page'"></Meta> -->
        </Head>
    </Html>
    <h1>{{ title }}</h1>

    <h1>User!</h1>
    <ul>
        <li v-for="user in users" :key="user.id">{{ user.username }}. ......{{ user.email }}</li>
    </ul>
</template>


<style scoped>
</style>
