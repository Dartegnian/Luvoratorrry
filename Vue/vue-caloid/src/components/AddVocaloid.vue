<template>
  <section class="add-vocaloid">
    <h2 class="add-vocaloid__title">
      Add a Vocaloid into Vue
    </h2>
    <form class="add-vocaloid__form" @submit="addVocaloid">
      <input
        class="add-vocaloid__input"
        type="text"
        name="New User Vocaloid"
        placeholder="Type Vocaloid name here"
        v-model="vocaloidName"
      />
      <input class="add-vocaloid__submit" type="submit" value="+" />
    </form>
  </section>
</template>

<script>
// import uuid from "uuid";

export default {
  name: "AddVocaloid",
  data() {
    return {
      vocaloidName: ""
    };
  },
  methods: {
    addVocaloid(e) {
      e.preventDefault();

      const newVocaloid = {
        title: this.vocaloidName,
        completed: false
      };

      this.$emit("add-vocaloid", newVocaloid);
      this.vocaloidName = "";
    }
  }
};
</script>

<style lang="scss">
.add-vocaloid {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #42b983;
}

.add-vocaloid__title {
  align-self: baseline;
  color: #ffffff;
}

.add-vocaloid__form {
  margin-bottom: 2rem;
}

.add-vocaloid__input {
  border: 0;
  min-height: 2rem;
  min-width: 21rem;
  padding: 0rem 2rem;
  border-radius: 0.4rem;
  color: #2c3e50;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:focus {
    outline: none;
  }
}

.add-vocaloid__submit {
  background-color: #246548;
  color: white;
  border: 0;
  padding: 0.5rem;
  margin-left: 1rem;
  min-width: 2rem;
  border-radius: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>
