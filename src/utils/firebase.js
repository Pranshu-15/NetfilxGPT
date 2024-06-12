// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzCy9PF4bnNP5CZ_kYEvqHwd3DyTZd7Yk",
  authDomain: "netflix-gpt-a32e2.firebaseapp.com",
  projectId: "netflix-gpt-a32e2",
  storageBucket: "netflix-gpt-a32e2.appspot.com",
  messagingSenderId: "60950262096",
  appId: "1:60950262096:web:4107f46969dd16d5dcbc55",
  measurementId: "G-9L2WC8LNT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
