<template>
  <div class="add-project-page">
    <!-- <input
      type="file"
      class="form-control"
      v-on:change="upload($event.target.files)"
      accept="image/*"
    /> -->
    <div class="container">
      <h2>Upload file</h2>
      <vue-base64-file-upload 
        class="v1"
        accept="image/png,image/jpeg"
        image-class="v1-image"
        input-class="v1-image"
        :max-size="customImageMaxSize"
        @size-exceeded="onSizeExceeded"

        @load="onLoad" />
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import VueBase64FileUpload from 'vue-base64-file-upload';
export default {
  name: "add-project",
  components: {
    VueBase64FileUpload
  },
  data() {
    return {
      project: {
        name: "",
        description: "",
        image: "",
        link: "",
        repo: "",
        commercial: false,
        fullStack: false,
        frontEnd: false,
        BackEnd: false

      },

     customImageMaxSize: 3 // megabytes
    };
  },
  computed: {

  },
  methods: {


    onLoad(dataUri) {
      this.projects.image64 = dataUri
    },
        onSizeExceeded(size) {
      alert(`Image ${size}Mb size exceeds limits of ${this.customImageMaxSize}Mb!`);
    }
  }
};
</script>

<style lang="scss">
.add-project-page {
  padding: 200px 100px;
}
</style>

