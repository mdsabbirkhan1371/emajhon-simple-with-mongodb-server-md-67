// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuCkufuFZ-wuf1PFEpIvLgI8Wcjo7YNl8",
    authDomain: "emajhon-simple-496a6.firebaseapp.com",
    projectId: "emajhon-simple-496a6",
    storageBucket: "emajhon-simple-496a6.appspot.com",
    messagingSenderId: "404610110153",
    appId: "1:404610110153:web:f658d4c109d03844b53318"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;