<script setup lang="ts">
// import useCounter from "~~/composables/count";

const { count, increment, decrement } = useCounter();
const title = "Hello Nuxt3!!";
useMeta({
    meta: [{
        name: "description"
        , content: '${title} page'
    }]
})

const { data: users }: any = await useFetch("/api/users");
</script>

<template>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="'${ title } page'"></Meta>
    <h1>{{ title }}</h1>

    <h1>User!</h1>
    <ul>
        <li v-for="user in users" :key="user.id">{{ user.username }}. ......{{ user.email }}</li>
    </ul>
    <br />
    <h2>{{ count }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
</template>


<style scoped>
</style>
