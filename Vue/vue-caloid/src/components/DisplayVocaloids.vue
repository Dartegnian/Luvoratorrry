<template>
  <main class="vuecaloids__home">
		<AddVocaloid />
    <section class="home__performers">
      <h2 class="home__title">
        Performing Vocaloids
      </h2>
      <section class="home__vocaloids-grid">
        <DisplayVocaloid
          v-bind:key="vocaloid.id"
          v-for="vocaloid in vocaloids"
          v-bind:vocaloid="vocaloid"
          v-on:delete-vocaloid="$emit('del-vocaloid', vocaloid.id)"
        />
      </section>
    </section>
  </main>
</template>

<script>
import AddVocaloid from "./AddVocaloid";
import DisplayVocaloid from "./DisplayVocaloid";

export default {
  name: "DisplayVocaloids",
  components: {
		AddVocaloid,
    DisplayVocaloid
  },
  props: ["vocaloids"]
};
</script>

<style lang="scss" scoped>
.vuecaloids__home {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #f6f6f6;
}

.home__performers {
  display: flex;
  flex-direction: column;
	padding: 1rem;
}

.home__title {
	align-self: baseline;
}

.home__vocaloids-grid {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(33rem, 1fr));
}
</style>
