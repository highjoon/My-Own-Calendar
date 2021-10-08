import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBvQN0Q7wNSjSc4GJ8EsTymuiTkrU59oUQ",
    authDomain: "my-own-calendar-2a1df.firebaseapp.com",
    projectId: "my-own-calendar-2a1df",
    storageBucket: "my-own-calendar-2a1df.appspot.com",
    messagingSenderId: "43079075870",
    appId: "1:43079075870:web:3e7d1613083088c5f7460f",
    measurementId: "G-TEBVKQSNBZ",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
