<template>
  <div class="home">
    <router-link to="admin"><button>Administrer</button></router-link>
    <cat-navigation></cat-navigation>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import CatNavigation from '../components/CatNavigation.vue';

export default {
  name: 'Home',
  methods: {
  },
  components: {
    CatNavigation
  }
}
</script>