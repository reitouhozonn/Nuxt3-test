import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBRp3m608j_RU0Buo6f9dQ9ha8kphUd9rI",
    authDomain: "testfirebase-1c38f.firebaseapp.com",
    projectId: "testfirebase-1c38f",
    storageBucket: "testfirebase-1c38f.appspot.com",
    messagingSenderId: "370775795093",
    appId: "1:370775795093:web:a2447ce95fb4555a9c029c",
    measurementId: "G-HXW76XQ9DP"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
