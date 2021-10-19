<template>
    
    <div>
        <h2>test</h2>
        <div id="firebase-data"></div>
    </div>

</template>

<script>
export default {
    
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, onSnapshot, collection, setDoc } from "firebase/firestore"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
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
const db = getFirestore();

const unsub = onSnapshot(doc(db, "cities", "sandefjord"), (doc) => {
  let test = document.querySelector("#firebase-data");
  test.innerHTML = doc.data().name;
})
</script>

<style lang="scss">

</style>