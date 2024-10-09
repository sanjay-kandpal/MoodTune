// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLXn8CuLK_qiUXPmNC4PHgR534VtWWBYM",
    authDomain: "login-signup-de363.firebaseapp.com",
    projectId: "login-signup-de363",
    storageBucket: "login-signup-de363.appspot.com",
    messagingSenderId: "32541847812",
    appId: "1:32541847812:web:a181eb89663d7b7cf92051",
    measurementId: "G-N38MGP47FQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
