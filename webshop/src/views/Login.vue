<template>

    <div class="login">
        <div v-if="logout" class="logged-out"><p>{{ logoutText }}</p></div>
        <h3>Logg inn</h3>
        <p>Denne tjenesten er beskyttet med Firestore db-autentisering.</p>
        <input type="text" v-model="input.email" placeholder="E-post"><br>
        <input type="password" v-model="input.password" placeholder="Passord"><br>
        <button @click="login">Logg inn</button>
        <p>Har du ikke en konto? Du kan <router-link to="/sign-up">registrere deg her.</router-link></p>
    </div>


</template>

<script>
require('../firebase');
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
    name: 'login',
    data() {
        return {
            input: {
                email: "",
                password: "",
            },
            logout: null,
            logoutText: "Du ble logget ut!",
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        login: function() {
            signInWithEmailAndPassword(getAuth(), this.input.email, this.input.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert('Du er nå logget inn!');
                this.$router.replace('home');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
        },
        fetchData() {
            this.logout = this.$route.params.logout;
        }
    },
    components: {
    }
}

</script>

<style lang="scss">

.login {
    margin-top: 20px;

    h3 {
        margin: 0;
    }

    input {
        margin: 10px 0;
        width: 20vh;
        padding: 15px;
    }

    button {
        margin-top: 20px;
        background: #2c3e50;
        color: #ffffff;
        padding: 8px 25px;
        border-radius: 10px;
        cursor: pointer;
    }

    p {
        margin-top: 20px;
        font-size: 13px;

        a {
            text-decoration: underline;
            cursor: pointer;
        }
    }

    .logged-out {
        
        p {
            color:red;
            font-weight: bold;
        }

    }
}

</style>