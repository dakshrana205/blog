// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6uLhwS_2_J2muTOpA5KeV44OoQQfsWK8",
  authDomain: "myblog-f943b.firebaseapp.com",
  projectId: "myblog-f943b",
  storageBucket: "myblog-f943b.appspot.com",
  messagingSenderId: "304380434039",
  appId: "1:304380434039:web:8bdc07c1cb89916c799872"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage  = getStorage(app);

export {fireDb, auth, storage}