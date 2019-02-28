<template>
  <div class="add-project-page">
    <div class="project-category-container">
      <h3>Add New Project</h3>
    </div>
    <form>
      <label>Name:</label>
      <input
        type="text"
        v-model="name"
        placeholder="name"
      />
      <label>Description:</label>
      <input
        type="text"
        v-model="description"
        placeholder="description"
      />
      <div class="container">
        <label>Image:</label>
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
      <br>

      <input
        v-model="holder"
        placeholder="enter tag"
      >
      <a class="add--tag--btn" v-on:click="addtag">
        Add Tag
      </a>
      <p class="current--tags"> Current Tags: </p>
      <div class="tag"
        v-for="(tag, index) in tags"
        :key="index"
      > <span>{{tag}}</span> </div>
      <br>
      <br>
      <br>
      <div @click="create"> SUBMIT </div>
    </form>
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
      BackEnd: false,
      tags: [],
      holder: "",

      customImageMaxSize: 3 // megabytes
    };
  },
  computed: {},
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
        tags: this.tags
      };
      this.$store.dispatch("createProject", data);
    },
    onLoad(dataUri) {
      this.image = dataUri;
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
  form {
    align-self: center;
    border-radius: 3px;
    padding: 5em 2em;
    width: 100%;
    max-width: 500px;
    label {
      color: $primary;
      font-size: 14px;

      display: block;
    }
    input {
      height: 30px;
      display: block;
      border: 1px solid $accent;
      border-radius: 3px;
      width: 100%;
      margin: 0.5em 0 1em 0;
    }
    .add--tag--btn {
      color:$primary;
    }

    .current--tags {
      color:$primary;
    }
    .tag {
     border: 1px solid $accent;
     border-radius:3px;
     display:inline-block;
      margin: 0 1em 0 0;
      span {
 color:$primary;
 padding:1em 2em;

      }
    }
  }
}
</style>

