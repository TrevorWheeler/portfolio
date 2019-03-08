<template>
  <div class="add-project-page">
    <section class="form--container">
      <div class="project-category-container">
        <h3>Add New Project</h3>
      </div>
      <form @submit.prevent="create()">
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
          <div class="container">

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
          </div>

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
      </form>
    </section>

    <section class="dashboard--projects">

      <div class="project-category-container">
        <h3>Current Projects</h3>
      </div>
      <div
        class="dashboard--projects--item"
        v-for="(project, index) in projects"
        :key="index"
      >
        <p> {{project.name}}</p>

        <div class="dashboard--projects--edit--delete--container">
          <router-link
            class="add--tag--btn"
            :to="{name:'edit', params:{id: project.id}}"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 14.2525V18.0025H3.75L14.81 6.9425L11.06 3.1925L0 14.2525ZM17.71 4.0425C18.1 3.6525 18.1 3.0225 17.71 2.6325L15.37 0.2925C14.98 -0.0975 14.35 -0.0975 13.96 0.2925L12.13 2.1225L15.88 5.8725L17.71 4.0425V4.0425Z" />
            </svg>
          </router-link>
          <a
            class="add--tag--btn"
            v-on:click="deleteProject(project.id)"
          >
            <svg
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" />
            </svg>
          </a>

        </div>
      </div>

    </section>
  </div>
</template>

<script>
// import axios from "axios";
import VueBase64FileUpload from "vue-base64-file-upload";
export default {
  name: "dashboard",
  components: {
    VueBase64FileUpload
  },
  data() {
    return {
      name: "",
      description: "",
      image: "",
      link: "",
      repo: "",
      commercial: false,
      fullStack: false,
      frontEnd: false,
      backEnd: false,
      tags: [],
      holder: "",

      customImageMaxSize: 3 // megabytes
    };
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  },
  methods: {
    addTag: function() {
      this.tags.push(this.holder);
      this.holder = [];
    },
    create() {
      const data = {
        name: this.name,
        description: this.description,
        image: this.image,
        tags: this.tags,
        link: this.link,
        repo: this.repo,
        fullStack: this.fullStack,
        frontEnd: this.frontEnd,
        commercial: this.commercial,
        backEnd: this.backEnd
      };
      this.$store.dispatch("createProject", data);
    },
    deleteProject(id) {
      this.$store.dispatch("deleteProject", id);
    },
    onLoad(dataUri) {
      this.image = dataUri;
    },
    onSizeExceeded(size) {
      alert(
        `Image ${size}Mb size exceeds limits of ${this.customImageMaxSize}Mb!`
      );
    }
  },
  mounted() {
    this.$store.dispatch("loadProjects");
  }
};
</script>

<style lang="scss">
.add-project-page {
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
    margin: 0 0 2em 0;

    h3 {
      padding: 0 0 0.2em 0;
      font-weight: 400;
      font-size: 2.4em;
      display: inline-block;
      color: $primary;
      border-bottom: 4px solid $accent;
    }
  }

  .dashboard--projects--item {
    display: flex;
    justify-content: space-between;
    margin: 0 0 1.5em 0;
    background-color: $primary;
    padding: 0.5em;
    p {
      align-self: center;
      color: $secondary;
      margin: 0;
      font-weight: 500;
    }
    .dashboard--projects--edit--delete--container {
      display: flex;
      .add--tag--btn {
        margin: 0 0 0 1em;
        background-color: $secondary;
        svg {
          fill: $accent;
        }
      }
    }
  }
}

form {
  border-radius: 3px;
  width: 100%;
  margin: 0 0 5em 0;

  .form--checkbox--container {
    display: flex;
    justify-content: space-between;
    margin: 0 0 2.5em 0;
    // padding: 0.5em;

    .checkbox {
      width: 40px;
      margin: 0;
    }
    label {
      color: $secondary;
      background-color: $accent;
      font-size: 1.6em;
      height: 40px;
      padding: 0 0 0 0.5em;
      line-height: 40px;
      font-weight: 500;
      border-radius: 3px;
      width: calc(100% - 60px);
      align-self: center;
    }
  }
  .form--submit--button {
    float: none;
    margin: 0 auto;
    height: 50px;
    width: 120px;
  }
  ::placeholder {
    align-self: center;
    opacity: 0.8;
    font-weight: 600;
    color: $secondary;
  }
  input {
    height: 40px;
    display: block;
    border: 1px solid $accent;
    border-radius: 3px;
    width: 100%;
    margin: 0 0 1.5em 0;
    padding: 0 0 0 0.3em;
    font-size: 16px;
    font-weight: 500;
  }

  .form--tag--container {
    display: flex;
    justify-content: space-between;
  }
  .form--tag--input {
    width: calc(100% - 60px);
  }

  .current--tags {
    color: $primary;
    font-size: 1.6em;
  }
  .tag {
    border: 1px solid $accent;
    border-radius: 3px;
    display: inline-block;
    padding: 1em 1.5em;
    margin: 0 1em 1em 0;

    span {
      color: $primary;
      font-weight: 600;
      font-size: 16px;
    }
  }
}
.add--tag--btn {
  background-color: $accent;
  width: 100px;
  height: 40px;
  width: 40px;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  svg {
    align-self: center;
    width: 20px;
    fill: $secondary;
  }
}
</style>
