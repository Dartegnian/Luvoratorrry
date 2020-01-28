<template>
	<div>
		<h3>Add todo</h3>
		<form @submit="onSubmit">
			<input type="text" v-model="title"/>
			<input type="submit" name="steve" value="Add this todo"/>
		</form>
	</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
	name: "AddTodo",
	data() {
		return {
			title: ""
		}
	},
	methods: {
		...mapActions(["addTodos"]),
		onSubmit(e) {
			e.preventDefault();
			this.addTodos(this.title);
		}
	}
}
</script>

<style>

</style>