<template>

    <div class="sign-up">
        <h3>Registrer deg</h3>
        <p>Informasjonen havner i en trygg Firestore database.</p>
        <input type="text" v-model="input.email" placeholder="E-post"><br>
        <input type="password" v-model="input.password" placeholder="Passord"><br>
        <button @click="signUp">Registrer</button>
        <p>Eller <router-link to="/login">logg deg inn her.</router-link></p>
    </div>

</template>

<script>
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword  } from "firebase/auth";

export default {
    name: 'signUp',
    data() {
        return {
            input: {
                email: "",
                password: "",
            }
        };
    },
    methods: {
        signUp: function() {
            createUserWithEmailAndPassword(getAuth(), this.input.email, this.input.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert('Din konto ble laget!');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
            });
        }
    }
}
</script>

<style lang="scss">

.sign-up {
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
        width: 10vh;
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
}

</style>