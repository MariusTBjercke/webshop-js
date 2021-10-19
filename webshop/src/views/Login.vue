<template>

    <div class="login">
        <h3>Logg inn</h3>
        <input type="text" placeholder="E-post"><br>
        <input type="password" placeholder="Passord"><br>
        <button>Logg inn</button>
        <p>Har du ikke en konto? Du kan registrere deg her</p>
    </div>

</template>

<script>
export default {
    name: 'login',
    data() {
        return {};
    },
    methods: {}
}
</script>

<style lang="scss">

.login {
    margin-top: 40px;
}

</style>