<template>
  <div id="app">
    <h1>Min<span>Butikk</span>.js</h1>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  
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
}
</style>
