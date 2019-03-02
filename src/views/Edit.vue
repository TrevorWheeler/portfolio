<template>
  <div class="edit-page">
    <h1> EDIT PAGE </h1>
    <div
      v-for="project in project"
      :key="project.name"
    >

      <label class="label">Name</label>

      <input
        class="input"
        v-model="name"
        type="text"
        :placeholder="name"
      >

      <label class="label">Name</label>

      <input
        class="input"
        v-model="description"
        type="text"
        :placeholder="description"
      >

    </div>
    <button
      class="button is-link"
      type="submit"
      v-on:click='onSave'
    >Submit</button>

    <section class="form--container">
      <div class="project-category-container">
        <h3>Add New Project</h3>
      </div>
      <!-- <form @submit.prevent="create()">
        <fieldset>
          <input
            type="text"
            v-model="name"
            placeholder="name"
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'name'"
          />
          <input
            type="text"
            v-model="description"
            placeholder="description"
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'description'"
          />

          <vue-base64-file-upload
            class="v1"
            accept="image/png,image/jpeg"
            image-class="v1-image"
            input-class="v1-image"
            placeholder="image"
            :max-size="customImageMaxSize"
            @size-exceeded="onSizeExceeded"
            @load="onLoad"
          />

          <input
            type="text"
            v-model="link"
            placeholder="link"
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'link'"
          />
          <input
            type="text"
            v-model="repo"
            placeholder="repo"
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'repo'"
          />
          <div class="form--checkbox--container">

            <label>Commercial</label>
            <input
              type="checkbox"
              class="checkbox"
              v-model="commercial"
            >
          </div>
          <div class="form--checkbox--container">
            <label>Full Stack</label>
            <input
              type="checkbox"
              class="checkbox"
              v-model="fullStack"
            >

          </div>
          <div class="form--checkbox--container">

            <label>Front-End </label>
            <input
              type="checkbox"
              class="checkbox"
              v-model="frontEnd"
            >

          </div>
          <div class="form--checkbox--container">
            <label>Back-End </label>
            <input
              type="checkbox"
              class="checkbox"
              v-model="backEnd"
            >

          </div>

          <div class="form--tag--container">
            <input
              v-model="holder"
              placeholder="tag"
              class="form--tag--input"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'tag'"
            >
            <a
              class="add--tag--btn"
              v-on:click="addtag"
            >

              <svg
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.151 71.25H29.098C27.296 71.25 25.835 69.789 25.835 67.986V3.263C25.835 1.461 27.296 0 29.098 0H42.151C43.954 0 45.415 1.461 45.415 3.263V67.986C45.415 69.789 43.954 71.25 42.151 71.25Z"
                  fill="black"
                />
                <path
                  d="M0 42.151V29.098C0 27.296 1.46 25.835 3.263 25.835H67.986C69.788 25.835 71.25 27.296 71.25 29.098V42.151C71.25 43.954 69.788 45.415 67.986 45.415H3.263C1.46 45.415 0 43.954 0 42.151Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
          <div
            class="tag"
            v-for="(tag, index) in tags"
            :key="index"
          > <span>{{tag}}</span> </div>
          <br>
          <br>
          <br>
          <button
            class="form--submit--button"
            type="submit"
            v-on:click='event = true'
          > Submit </button>
        </fieldset>
      </form> -->
    </section>
  </div>
</template>

<script>
export default {
  name: "edit",
  props: ["id"],
  date() {
    return {
      name: "",

      description: "",
      image: "",
      tags: "",
      link: "",
      repo: "",
      fullStack: "",
      frontEnd: "",
      commercial: "",
      backEnd: ""
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
        name: this.name,
        description: this.description
      });
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.edit-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: $secondary;
  padding: 2em;
  max-width: 650px;
  margin: 0 auto;
}
</style>

