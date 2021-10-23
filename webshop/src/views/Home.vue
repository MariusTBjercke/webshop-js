<template>
  <div class="home">
    <button @click="signOut">Logg ut</button>
    <store-nav></store-nav>
  </div>
</template>

<script>
import StoreNav from '../components/StoreNav.vue'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import router from '../router';

export default {
  name: 'Home',
  methods: {
    signOut: function() {
      let route = this.$route;
      signOut(getAuth()).then(function() {
        console.log('Signed out');
        router.push({
          name: 'Login',
          params: {
            logout: true,
          }
        });
      }, function(error) {
        console.log('Sign out error', error);
      });
    }
  },
  components: {
    StoreNav
  }
}
</script>