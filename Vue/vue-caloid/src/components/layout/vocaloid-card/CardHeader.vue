<template>
	<section class="card-header">
		<section class="card-header__banner">
			<div class="card-header__profile-picture">
				<img class="card-header__profile-picture-image" v-bind:src="getProfilePicture(picture)"/>
			</div>
		</section>
		{{ name }}
	</section>
</template>

<script>
export default {
	name: "CardHeader",
	props: {
		name: String,
		picture: String
	},
	methods: {
		getProfilePicture(src) {
			const image = require.context('@/assets/images', false)
    	return image('./' + src)
		}
	}
}
</script>

<style lang="scss">
.card-header__banner {
	margin-bottom: 2rem;
}
.card-header__profile-picture {
  display: flex;
	border-radius: 50%;
  max-height: 7rem;
	max-width: 20%;
	margin: 0 auto;
	object-fit: cover;
	overflow: hidden;
	box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
.card-header__profile-picture-image {
	max-width: 100%;
}
</style>