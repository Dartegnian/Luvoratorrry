<template>
  <div id="vuecaloids">
		<Header/>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
export default {
	components: {
		Header
	}
}
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
