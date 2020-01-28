<template>
  <div id="app">
    <div class="container">
			<AddTodos />
			<FilterTodo />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos";
import AddTodos from "./components/AddTodo";
import FilterTodo from "./components/FilterTodo";

export default {
  name: "app",
  components: {
		Todos,
		AddTodos,
		FilterTodo
  }
};
</script>

<style>
</style>
