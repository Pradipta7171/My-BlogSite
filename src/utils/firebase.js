// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "myblog-21dc7.firebaseapp.com",
  projectId: "myblog-21dc7",
  storageBucket: "myblog-21dc7.appspot.com",
  messagingSenderId: "648878965650",
  appId: "1:648878965650:web:5a7bdf9c10dbfb6497b74b",
  measurementId: "G-K2ZY1NDQCK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);