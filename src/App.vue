<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
    AAABBB {{ $route }} {{ $route.meta.title }}BBB

    {{ $route.path }}
    {{ $route.name }}
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
