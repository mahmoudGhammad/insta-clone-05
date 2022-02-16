// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs5oETIkBhs4K8Xl-JnY0AEJIlV-XBZcc",
  authDomain: "insta-clone-a9f94.firebaseapp.com",
  projectId: "insta-clone-a9f94",
  storageBucket: "insta-clone-a9f94.appspot.com",
  messagingSenderId: "120027499124",
  appId: "1:120027499124:web:334f44994b5cd20c32df21"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage(app , "gs://insta-clone-a9f94.appspot.com");

export { app, db, storage };