<template>
  <DisplayVocaloids
    v-bind:vocaloids="vocaloids"
    v-on:del-vocaloid="deleteVocaloid"
    v-on:add-vocaloid="addVocaloidIntoDb($event)"
  />
</template>

<script>
import DisplayVocaloids from "@/components/DisplayVocaloids";
import axios from "axios";

export default {
  name: "list-vocaloids",
  components: {
    DisplayVocaloids
  },
  data() {
    return {
      vocaloids: []
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => (this.vocaloids = res.data))
      .catch(err => console.error(err));
  },
  methods: {
    deleteVocaloid(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => {
          this.vocaloids = this.vocaloids.filter(
            vocaloid => vocaloid.id !== id
          );
          console.log(res);
        })
        .catch(err => console.error(err));
    },
    addVocaloidIntoDb(newTodo) {
      const { title, completed } = newTodo;

      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(res => (this.vocaloids = [...this.vocaloids, res.data]))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
#list-vocaloids {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
