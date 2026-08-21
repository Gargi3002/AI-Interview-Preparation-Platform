// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
      apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-iq-969bb.firebaseapp.com",
  projectId: "interview-iq-969bb",
  storageBucket: "interview-iq-969bb.firebasestorage.app",
  messagingSenderId: "1098648497894",
  appId: "1:1098648497894:web:8192d2e7a162a6fbd4d527"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const provider=new GoogleAuthProvider()
export {auth,provider}