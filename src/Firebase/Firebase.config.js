// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2pI3g50INFkHyDZjwYeEIOqFjp6w7OfE",
  authDomain: "social-work-auth.firebaseapp.com",
  projectId: "social-work-auth",
  storageBucket: "social-work-auth.firebasestorage.app",
  messagingSenderId: "4873983960",
  appId: "1:4873983960:web:78695c504682314924c4ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;