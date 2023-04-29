// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkdrWn70pHRTtjODqIIDqqScbMkHlK5hk",
  authDomain: "auth-firebase-context-ta-7c1e0.firebaseapp.com",
  projectId: "auth-firebase-context-ta-7c1e0",
  storageBucket: "auth-firebase-context-ta-7c1e0.appspot.com",
  messagingSenderId: "613524788169",
  appId: "1:613524788169:web:fbc502bc1ff7bb300f4e18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;