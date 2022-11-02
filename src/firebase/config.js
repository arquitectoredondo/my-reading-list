import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-XjySMH0K5zMy0oECOfj_JrJ2aZMUxXU",
  authDomain: "readinglistapp-cdec5.firebaseapp.com",
  projectId: "readinglistapp-cdec5",
  storageBucket: "readinglistapp-cdec5.appspot.com",
  messagingSenderId: "6219974495",
  appId: "1:6219974495:web:a841c4fb4e61d379ccd8ea",
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

// init firebase auth
const auth = getAuth();

export { db, auth };
