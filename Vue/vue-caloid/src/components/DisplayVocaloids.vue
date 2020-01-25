<template>
  <div class="vocaloids">
    <h1 class="vocaloids__title">Vocaloids</h1>

    <section class="vocaloids__grid">
			<VocaloidInformation
      v-bind:key="vocaloid.id"
      v-for="vocaloid in vocaloids"
      v-bind:vocaloid="vocaloid"
			v-on:delete-vocaloid="$emit('del-vocaloid', vocaloid.id)"
    />
		</section>
  </div>
</template>

<script>
import VocaloidInformation from "./VocaloidInformation";

export default {
  name: "DisplayVocaloids",
  components: {
    VocaloidInformation
  },
  props: ["vocaloids"]
};
</script>

<style scoped>
.vocaloids__grid {
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(auto-fill, minmax(33rem, 1fr));
}
</style>