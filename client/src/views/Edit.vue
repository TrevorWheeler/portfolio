<template>
  <div class="edit--page">

    <div class="edit--page--container">
      <div class="project-category-container">
        <h3>Edit {{project.name}}</h3>
      </div>

      <form @submit.prevent="onSave()">
        <fieldset>
          <input
            type="text"
            v-model="project.name"
            placeholder="name"
          >

          <input
            type="text"
            v-model="project.description"
            placeholder="description"
          />
          <div class="container">

            <vue-base64-file-upload
              class="v1"
              accept="image/png,image/jpeg"
              image-class="v1-image"
              input-class="v1-image"
              :placeholder="project.image"
              :max-size="customImageMaxSize"
              @size-exceeded="onSizeExceeded"
              @load="onLoad"
            />
          </div>
          <input
            type="text"
            v-model="project.link"
            placeholder="link"
          />

          <input
            type="text"
            v-model="project.repo"
            placeholder="repo"
          />

          <div class="form--checkbox--container">

            <label>Commercial</label>
            <input
              type="checkbox"
              class="checkbox"
              v-model="project.commercial"
            >
          </div>
          <div class="form--checkbox--container">
            <label>Full Stack</label>
            <input
              type="checkbox"
              class="checkbox"
              v-model="project.fullStack"
            >

          </div>
          <div class="form--checkbox--container">

            <label>Front-End </label>
            <input
              type="checkbox"
              class="checkbox"
              v-model="project.frontEnd"
            >

          </div>
          <div class="form--checkbox--container">
            <label>Back-End </label>
            <input
              type="checkbox"
              class="checkbox"
              v-model="project.backEnd"
            >

          </div>

          <div class="form--tag--container">
            <input
              v-model="holder"
              placeholder="add tag"
              class="form--tag--input"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'tag'"
            >
            <a
              class="add--tag--btn"
              v-on:click="addTag"
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
            v-for="(tag, index) in project.tags"
            :key="index"
            v-on:click="removeTag(index)"
          > <span>{{tag}}</span> </div>
          <br>
          <br>
          <br>
          <br>
          <button
            class="form--submit--button"
            type="submit"
            v-on:click='event = true'
          > Submit </button>
        </fieldset>
      </form>

    </div>
  </div>
</template>

<script>
import VueBase64FileUpload from "vue-base64-file-upload";

export default {
  props: ["id"],
  components: {
    VueBase64FileUpload
  },
  data() {
    return {
      tags: [],
      holder: "",
      image: "",
      base64: "",
      customImageMaxSize: 3 // megabytes
    };
  },
  computed: {
    project() {
      return this.$store.getters.loadProject(this.id);
    }
  },
  methods: {
    onSave() {
      this.$store.dispatch("editProject", {
        id: this.project.id,
        name: this.project.name,
        description: this.project.description,
        tags: this.project.tags,
        image: this.base64 || this.project.image,
        link: this.project.link,
        repo: this.project.repo,
        commercial: this.project.commercial,
        fullStack: this.project.fullStack,
        frontEnd: this.project.frontEnd,
        backEnd: this.project.backEnd
      });
      this.$router.go(-1);
    },
    addTag() {
      this.project.tags.push(this.holder);
      this.holder = [];
    },
    removeTag(id) {
      this.project.tags.splice(id);
    },
    onLoad(dataUri) {
      this.base64 = dataUri;
    },
    onSizeExceeded(size) {
      alert(
        `Image ${size}Mb size exceeds limits of ${this.customImageMaxSize}Mb!`
      );
    }
  }
};
</script>

<style lang="scss">
.edit--page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: $secondary;
  padding: 2em;
  max-width: 650px;
  margin: 0 auto;
  .v1-image {
    width: 100%;
    display: block;
  }

  .project-category-container {
    display: flex;
    justify-content: center;
    margin: 0 0 7em 0;
    h3 {
      padding: 0 0 0.2em 0;
      margin: 0;
      font-weight: 600;
      font-size: 2.4em;
      color: $text-light;
      display: inline-block;
      border-bottom: 2px solid $accent;
    }
  }
  .tag {
    cursor: pointer;
    span {
      &:hover {
        color: red;
      }
    }
  }
}
</style>
