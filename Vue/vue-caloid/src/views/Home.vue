<template>
  <DisplayVocaloids
    v-bind:vocaloids="vocaloids"
    v-on:del-vocaloid="deleteVocaloid"
  />
</template>

<script>
import DisplayVocaloids from "@/components/DisplayVocaloids";

export default {
  name: "list-vocaloids",
  components: {
    DisplayVocaloids
  },
  data() {
    return {
      vocaloids: [
        {
          id: 1,
          name: "Hatsune Miku",
          isPerforming: true
        },
        {
          id: 2,
          name: "Kagamine Rin",
          isPerforming: false
        },
        {
          id: 3,
          name: "Kagamine Len",
          isPerforming: false
        },
        {
          id: 4,
          name: "Megurine Luka",
          isPerforming: true
        },
        {
          id: 5,
          name: "IA",
          isPerforming: true
        },
        {
          id: 6,
          name: "Gumi",
          isPerforming: false
        }
      ]
    };
  },
  methods: {
    deleteVocaloid(id) {
      this.vocaloids = this.vocaloids.filter(vocaloid => vocaloid.id !== id);
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
