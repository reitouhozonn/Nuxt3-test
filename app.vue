<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRp3m608j_RU0Buo6f9dQ9ha8kphUd9rI",
  authDomain: "testfirebase-1c38f.firebaseapp.com",
  projectId: "testfirebase-1c38f",
  storageBucket: "testfirebase-1c38f.appspot.com",
  messagingSenderId: "370775795093",
  appId: "1:370775795093:web:a2447ce95fb4555a9c029c",
  measurementId: "G-HXW76XQ9DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
</script>
