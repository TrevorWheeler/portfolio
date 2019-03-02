<template>
  <div class="add-project-page">
    <section class="form--container">
      <div class="project-category-container">
        <h3>Add New Project</h3>
      </div>
      <form>

        <input
          type="text"
          v-model="name"
          placeholder="name"
        />
        <input
          type="text"
          v-model="description"
          placeholder="Description"
        />
        <div class="container">

          <vue-base64-file-upload
            class="v1"
            accept="image/png,image/jpeg"
            image-class="v1-image"
            input-class="v1-image"
            :max-size="customImageMaxSize"
            @size-exceeded="onSizeExceeded"
            @load="onLoad"
          />
        </div>

        <input
          type="text"
          v-model="link"
          placeholder="Link"
        />
        <input
          type="text"
          v-model="repo"
          placeholder="Repo"
        />
        <div class="form--checkbox--container">
          <span class="form--checkbox--value">Commercial</span>
          <input
            type="checkbox"
            class="checkbox"
            v-model="commercial"
          >
          <span class="form--checkbox--value">{{ commercial }}</span>
        </div>
        <div class="form--checkbox--container">
          <span class="form--checkbox--value">Full Stack</span>
          <input
            type="checkbox"
            class="checkbox"
            v-model="fullStack"
          >
          <span class="form--checkbox--value">{{ fullStack }}</span>
        </div>
        <div class="form--checkbox--container">
          <span class="form--checkbox--value">Front-End</span>
          <input
            type="checkbox"
            class="checkbox"
            v-model="frontEnd"
          >
          <span class="form--checkbox--value">{{ frontEnd }}</span>
        </div>
        <div class="form--checkbox--container">
          <span class="form--checkbox--value">Back-End</span>
          <input
            type="checkbox"
            class="checkbox"
            v-model="backEnd"
          >
          <span class="form--checkbox--value">{{ backEnd }}</span>
        </div>
        <input
          v-model="holder"
          placeholder="Tag Name"
        >
        <a
          class="add--tag--btn"
          v-on:click="addtag"
        >
          <span>
            ADD TAG
          </span>
        </a>
        <p class="current--tags"> Current Tags: </p>
        <div
          class="tag"
          v-for="(tag, index) in tags"
          :key="index"
        > <span>{{tag}}</span> </div>
        <br>
        <br>
        <br>
        <div
          class="create--button"
          @click="create"
        > <span>Submit</span> </div>
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
        <p> {{project.id}}</p>
        <div
          class="delete"
          v-on:click="deleteProject(project.id)"
        >
          <h1 style="color:red;font-size:20px;">X</h1>
        </div>
        <router-link :to="{name:'edit', params:{id: project.id}}">
          <h1 style="color:red;font-size:20px;">EDIT</h1>
        </router-link>
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
    addtag: function() {
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
  padding: 100px 0;
  background-color: $secondary;
  .project-category-container {
    display: flex;
    justify-content: center;
    margin: 0 0 30px 0;

    h3 {
      padding: 0 0 0.2em 0;
      font-weight: 400;
      font-size: 2.4em;
      display: inline-block;
      color: $primary;
      border-bottom: 4px solid $accent;
    }
  }

  .form--container {
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: center;
    width: 500px;
  }
  form {
    border-radius: 3px;
    padding: 5em 2em;
    width: 100%;

    .form--checkbox--container {
      display: flex;
      justify-content: flex-start;
      .checkbox {
        display: inline-block;
        width: 100px;
      }
      span {
        align-self: center;
        color: $primary;
        font-size: 16px;
        display: inline-block;
      }
    }

    ::placeholder {
      align-self: center;
      font-size: 18px;
      font-weight: 600;
      letter-spacing: 1px;
      color: 54;
      color: $secondary;
    }
    input {
      height: 62px;
      display: block;
      border: 1px solid $accent;
      border-radius: 3px;
      width: 100%;
      margin: 0.5em 0 1em 0;
    }
    .add--tag--btn {
      background-color: $accent;
      width: 100px;
      height: 62px;
      border-radius: 3px;
      cursor: pointer;
      display: flex;
      justify-content: center;

      span {
        align-self: center;
        color: $secondary;
        font-size: 16px;
        font-weight: 600;
      }
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
      margin: 0 1em 0 0;

      span {
        color: $primary;
        font-weight: 600;
        font-size: 16px;
      }
    }
    .create--button {
      height: 62px;
      width: 100px;
      background-color: $accent;
      display: inline-block;
      justify-content: center;
      display: flex;
      cursor: pointer;
      border-radius: 3px;
      span {
        align-self: center;
        color: $secondary;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }

  .dashboard--projects {
    p {
      color: $primary;
    }
  }
}
</style>

