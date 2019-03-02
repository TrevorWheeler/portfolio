<template>
  <div>
    <h1> EDIT PAGE </h1>
    <div v-for="project in project">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input
            class="input"
            v-model="name"
            type="text"
            :placeholder="project.name"
          >
        </div>
      </div>
    </div>
    <button
      class="button is-link"
      type="submit"
      v-on:click='onSave'
    >Submit</button>
  </div>
</template>

<script>
export default {
  name: "edit",
  props: ["id"],
  date() {
    return {
      name: ""
    };
  },
  computed: {
    project() {
      return this.$store.getters.loadProject(this.id);
      console.log(this.id);
    }
  },
  methods: {
    onSave() {
      this.$store.dispatch("editProject", {
        id: this.id,
        name: this.name
      });
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>
