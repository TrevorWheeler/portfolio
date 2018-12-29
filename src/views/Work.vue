
<template>
<div class="works-page">
  <div class="container" v-for="(active, index) in activeWork" :key="index">
{{active.title}}

  </div>
  
</div>
    
</template>

<script>
export default {
  name: "work",
  props: ["id"],
  data() {
    return {};
  },
  computed: {
    slide() {
      return this.$store.state.slide;
    },
    works() {
      return this.$store.state.works;
    },
    activeWork: function() {
      return this.works.filter(function(a) {
        return a.active;
      });
    }
  },
  methods: {}
};
</script>

<style>
</style>
