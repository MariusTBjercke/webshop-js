import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, onSnapshot, collection, setDoc } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";

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
const db = getFirestore();

export {
  db
}