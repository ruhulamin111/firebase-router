import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2Z2gyHNYvLm3w-iseu6Tqyy9WEqTfHXw",
    authDomain: "fir-router-a23eb.firebaseapp.com",
    projectId: "fir-router-a23eb",
    storageBucket: "fir-router-a23eb.appspot.com",
    messagingSenderId: "1000090574957",
    appId: "1:1000090574957:web:395ca262f12ce93a22df64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;