
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "fir-auth-demo-d2e20.firebaseapp.com",
    projectId: "fir-auth-demo-d2e20",
    storageBucket: "fir-auth-demo-d2e20.appspot.com",
    messagingSenderId: "202224639205",
    appId: "1:202224639205:web:5e30df60f0e1c84c88c80c",
    measurementId: "G-HN9D6YTD2J"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);