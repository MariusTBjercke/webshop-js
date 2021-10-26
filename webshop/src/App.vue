<template>
  <div id="app">
    <h1>Min<span>Butikk</span>.js</h1>
    <div v-if="loggedIn === true">
      <h4>Bruker: {{ loggedEmail }}</h4>
      <button @click="signOut">Logg ut</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "./router";

export default {
  data() {
    return {
      loggedEmail: null,
      loggedIn: false,
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    signOut: () => {
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
    },
    fetchData: function() {
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
            this.loggedEmail = user.email;
            this.loggedIn = true;
        } else {
            return 'Error';
            this.loggedIn = false;
        }
      });
    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 460px;
  margin: auto;
  color: #2c3e50;

  h1 {
    font-size: 3em;
    font-weight: 500;
    width: auto;
    position: relative;

    &::after {
      content: "Av Marius Bjercke";
      position: absolute;
      font-size: .3em;
      left: 0;
      top: 50px;
    }
  }

  span {
    font-weight: bold;
  }

  button {
    margin: 0 0 5px 0;
  }

  h4 {
    margin: 5px 0 5px 0;
  }
}
</style>
