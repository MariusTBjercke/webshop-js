import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { getAuth, onAuthStateChanged  } from "firebase/auth";

onAuthStateChanged(getAuth(), (user) => {
  new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })
});