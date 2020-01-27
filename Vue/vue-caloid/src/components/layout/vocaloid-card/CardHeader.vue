<template>
  <section class="card-header">
    <section class="card-header__banner">
      <div class="card-header__profile-background">
        <img class="card-header__profile-background-image" />
      </div>
      <div class="card-header__profile-picture">
        <img class="card-header__profile-picture-image" />
      </div>
    </section>
    <h2>
      {{ name }}
    </h2>
  </section>
</template>

<script>
export default {
  name: "CardHeader",
  props: {
    name: String,
    picture: String,
    banner: String
  },
  methods: {
    getPicture(src, type) {
      let image = "";

      if (type === "profile") {
        image = require.context("@/assets/images/profile-pictures/", false);
      } else if (type === "banner") {
        image = require.context("@/assets/images/profile-banners/", false);
      }

      return image("./" + src);
    }
  }
};
</script>

<style lang="scss">
.card-header__banner {
  margin-bottom: 2rem;
}
.card-header__profile-background {
  display: flex;
  max-height: 13rem;
}
.card-header__profile-background-image {
  min-width: 100%;
  object-fit: cover;
}
.card-header__profile-picture {
  display: flex;
  border-radius: 50%;
  max-height: 7rem;
  max-width: 7rem;
  margin: 0 auto;
  margin-top: -20%;
  object-fit: cover;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.card-header__profile-picture-image {
  max-width: 100%;
  object-fit: cover;
  background-color: #ffffff;
}
</style>
