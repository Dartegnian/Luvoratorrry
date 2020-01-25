<template>
	<div
	class="vocaloid"
	v-bind:class="{ 'vocaloid--is-performing': vocaloid.isPerforming }"
	>
		{{ vocaloid.name }}
		<div v-if="!vocaloid.isPerforming">
			<button class="vocaloid__action vocaloid__action--perform" v-on:click="setPerforming">
				Set to perform on stage!
			</button>
		</div>
		<div v-else>
			<p>
				Vocaloid is performing!
			</p>
			<button class="vocaloid__action vocaloid__action--return" v-on:click="setPerforming">
				Return to backstage
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "VocaloidInformation",
	props: {
		vocaloid: Object
	},
	methods: {
		setPerforming() {
			this.vocaloid.isPerforming = !this.vocaloid.isPerforming;
		}
	}
}
</script>

<style scoped>
.vocaloid {
	padding: 2rem 0rem;
	background-color: #fbfbfb;
	color: #000000;
	margin: 1rem 0rem;
	border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.vocaloid--is-performing {
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.vocaloid__action {
	color: white;
	max-width: 8rem;
	margin: 0 auto;
	padding: 0.5rem;
	border-radius: 0.3rem;
  border: none;
  margin-top: 2rem;
}

.vocaloid__action:focus {
  outline: none;
}

.vocaloid__action--perform {
	background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
}

.vocaloid__action--return {
  background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
}

</style>