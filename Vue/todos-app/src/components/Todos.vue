<template>
	<div>
		<h3>Todos</h3>
		<div class="todos">
			<article
				@dblclick="updateTodo(todo)"
				v-for="todo in allTodos"
				:key="todo.id"
				class="todo"
				:class="{ 'is-complete': todo.completed }"
			>
				<div>{{ todo.title }}</div>
				<i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
			</article>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	name: "Todos",
	computed: mapGetters(["allTodos"]),
	methods: {
		...mapActions([
			"fetchTodos",
			"deleteTodo",
			"updateTodo"
		]),
	},
	created() {
		this.fetchTodos()
	}
};
</script>

<style>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
	color: white;
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>