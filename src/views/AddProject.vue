<template>
  <div class="add-project-page">
    <h2>Name</h2>
    <input
      type="text"
      v-model="name"
      placeholder="name"
    />
    <input
      type="text"
      v-model="description"
      placeholder="description"
    />
    <div class="container">
      <h2>Upload file</h2>
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
    <div @click="create"> SUBMIT </div>
  </div>
</template>

<script>
// import axios from "axios";
import VueBase64FileUpload from "vue-base64-file-upload";
export default {
  name: "add-project",
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

      customImageMaxSize: 3 // megabytes
    };
  },
  computed: {},
  methods: {
    create() {
      const data = {
        name: this.name,
        description: this.description,
        image: this.image
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
  padding: 200px 100px;
}
</style>

