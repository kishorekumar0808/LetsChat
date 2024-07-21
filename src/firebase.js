import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9OsVJMtuYpTKkFi9QwFHOSlwY3zV0APo",
  authDomain: "chat-2197e.firebaseapp.com",
  projectId: "chat-2197e",
  storageBucket: "chat-2197e.appspot.com",
  messagingSenderId: "174147316974",
  appId: "1:174147316974:web:9d238e0a4a228d7dae57ff",
  measurementId: "G-MZ2N3T2LQ6",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
