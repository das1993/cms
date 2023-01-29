import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpUcJDzewCtwJt-fyKxEHur9qCI_MQKU0",
  authDomain: "anjali-cms-ffa4d.firebaseapp.com",
  projectId: "anjali-cms-ffa4d",
  storageBucket: "anjali-cms-ffa4d.appspot.com",
  messagingSenderId: "769888885287",
  appId: "1:769888885287:web:a9843ede5e5b02d4f58c02",
  measurementId: "G-31JHDCCLH0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
