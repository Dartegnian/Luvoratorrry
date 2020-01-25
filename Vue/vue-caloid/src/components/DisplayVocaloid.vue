<template>
  <article
    class="vocaloid"
    v-bind:class="{ 'vocaloid--is-performing': vocaloid.isPerforming }"
  >
		<CardHeader v-bind:name="vocaloid.name" v-bind:picture="vocaloid.profilePicture"/>

    <div v-if="!vocaloid.isPerforming">
      <button
        class="vocaloid__action vocaloid__action--perform"
        @click="setPerforming"
      >
        Set to perform on stage!
      </button>
    </div>
    <div v-else>
      <p>Vocaloid {{ vocaloid.name }} is performing!</p>
      <button
        class="vocaloid__action vocaloid__action--return"
        @click="setPerforming"
      >
        Return to backstage
      </button>
    </div>

    <button
      class="vocaloid__action vocaloid__action--delete"
      @click="$emit('delete-vocaloid', vocaloid.id)"
    >
      Delete Vocaloid
    </button>
  </article>
</template>

<script>
import CardHeader from "./layout/vocaloid-card/CardHeader";

export default {
  name: "DisplayVocaloid",
	components: {
		CardHeader
	},
  props: {
    vocaloid: Object
  },
  methods: {
    setPerforming() {
      this.vocaloid.isPerforming = !this.vocaloid.isPerforming;
    }
  }
};
</script>

<style lang="scss" scoped>
.vocaloid {
  padding: 2rem 0rem;
	padding-top: 0rem;
  background-color: #fbfbfb;
  color: #000000;
  margin: 1rem 0rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.vocaloid--is-performing {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.vocaloid__action {
  color: white;
  max-width: 8rem;
  margin: 0 auto;
  padding: 0.5rem;
  border-radius: 0.3rem;
  border: none;
  margin-top: 2rem;

  &:focus {
    outline: none;
  }
}

.vocaloid__action--perform {
  background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
}

.vocaloid__action--return {
  background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
}
.vocaloid__action--delete {
  background-image: linear-gradient(to top, #c71d6f 0%, #d09693 100%);
}
</style>
