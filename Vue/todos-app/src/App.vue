<template>
  <div id="app">
    <div class="container">
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos";

export default {
  name: "app",
  components: {
    Todos
  }
};
</script>

<style>
</style>
