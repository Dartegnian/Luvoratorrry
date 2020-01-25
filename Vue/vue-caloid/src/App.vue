<template>
  <div id="vuecaloids">
    <header class="vuecaloids__header">
      <h1 class="vocaloids__title">Vocaloids in Vue</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "src/assets/styles/globals.scss";

#vuecaloids {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.vuecaloids__header {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.vocaloids__title {
  margin-top: 0;
}
</style>
