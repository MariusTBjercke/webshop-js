<template>
  <div class="admin">
      <router-link to="home"><button>Gå tilbake</button></router-link>
    <cat-editor></cat-editor>
  </div>
</template>

<script>
import CatEditor from '../components/CatEditor.vue'
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import router from '../router';

export default {
  name: 'Admin',
  methods: {
  },
  components: {
    CatEditor
  }
}

</script>