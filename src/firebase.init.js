// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLsqV7i4taSng4Uk-eEyab1Dz8lY6QVaY",
    authDomain: "fir-router-eb99e.firebaseapp.com",
    projectId: "fir-router-eb99e",
    storageBucket: "fir-router-eb99e.appspot.com",
    messagingSenderId: "168210045219",
    appId: "1:168210045219:web:b2f3d89f4d16dc41d05496"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;