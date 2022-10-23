// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGZMYHqaHGSSUNzRaEbpSvQ7iYMEVMHuE",
  authDomain: "netflix-copy-9c651.firebaseapp.com",
  projectId: "netflix-copy-9c651",
  storageBucket: "netflix-copy-9c651.appspot.com",
  messagingSenderId: "721727855872",
  appId: "1:721727855872:web:6e61e58cd11af2a78867e5",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
