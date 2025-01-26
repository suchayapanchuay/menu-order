import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAeBEOXiB6LU7B5M9ltvZS6kkpIiap1TKQ",
  authDomain: "menu-order-6ba8b.firebaseapp.com",
  projectId: "menu-order-6ba8b",
  storageBucket: "menu-order-6ba8b.appspot.com",
  messagingSenderId: "878818200060",
  appId: "1:878818200060:web:71ec1679d31ebdc72c4a79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore();
export {auth,provider};
