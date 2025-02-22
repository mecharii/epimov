import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfPwx1E5j3BLqTPoIaswtAoYH5Zd9RYiI",
  authDomain: "furkanpal-83077.firebaseapp.com",
  projectId: "furkanpal-83077",
  storageBucket: "furkanpal-83077.appspot.com",
  messagingSenderId: "513452797896",
  appId: "1:513452797896:web:2b434be9e0cee4d5911afd",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
