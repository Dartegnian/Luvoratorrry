<template>
  <main class="vocaloids">
    <section class="vocaloids__grid">
      <DisplayVocaloid
        v-bind:key="vocaloid.id"
        v-for="vocaloid in vocaloids"
        v-bind:vocaloid="vocaloid"
        v-on:delete-vocaloid="$emit('del-vocaloid', vocaloid.id)"
      />
    </section>
  </main>
</template>

<script>
import DisplayVocaloid from "./DisplayVocaloid";

export default {
  name: "DisplayVocaloids",
  components: {
    DisplayVocaloid
  },
  props: ["vocaloids"]
};
</script>

<style lang="scss" scoped>
.vocaloids {
	background-color: #f6f6f6;
}
.vocaloids__grid {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(33rem, 1fr));
}
</style>
