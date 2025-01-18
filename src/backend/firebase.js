// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2ny3GxqjkdPPmvmh7Nl0wFRHTYiZ6aT8",
  authDomain: "nwhacks-lockedin.firebaseapp.com",
  projectId: "nwhacks-lockedin",
  storageBucket: "nwhacks-lockedin.firebasestorage.app",
  messagingSenderId: "827345665555",
  appId: "1:827345665555:web:ac1c0c2b23f6485f1c89e6",
  measurementId: "G-EEF51MHYT1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Initialize Analytics if needed
const analytics = getAnalytics(app);

export { app, analytics };