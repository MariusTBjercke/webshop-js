// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuaHvcvzUlPTScic3I4O5wY-axTO4WfbU",
  authDomain: "bjercke-media.firebaseapp.com",
  databaseURL: "https://bjercke-media-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bjercke-media",
  storageBucket: "bjercke-media.appspot.com",
  messagingSenderId: "33531043131",
  appId: "1:33531043131:web:30dfa1f9152a2b6dc4eb1e",
  measurementId: "G-LQKG4MXN10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {
  getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

// Initialize database
const db = getFirestore();

// class TestItem {
//   constructor (name, state, country) {
//     this.name = name;
//     this.state = state;
//     this.country = country;
//   }

//   toString() {
//     return this.name;
//   }

// }

// const ref = doc(db, "cities", "sandefjord");
// await setDoc(ref, {
//   name: "test",
//   test: "test",
//   array: [
//     "en",
//     "to",
//     "tre"
//   ]
// });