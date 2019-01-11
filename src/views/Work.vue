
<template>
  <div class="work-page">

    <div
      class="content"
      v-for="(active, index) in activeWork"
      :key="index"
    >
      <h1>{{active.title}}</h1>
      <p class="website"> {{active.website }} </p>
      <p> {{active.description }} </p>
      <img :src="active.image" />
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

<style lang="scss">
.work-page {
  .content {
    padding: 150px 10vw;
    h1 {
      font-size: 40px;
      text-transform: uppercase;
      margin: 0;
      @media only screen and (min-width: 375px) {
        font-size: 48px;
      }
    }
    .website {
      text-transform: uppercase;
    }
    p {
      font-size: 18px;
      line-height: 1.7em;
      max-width: 1000px;
    }
    img {
      width: 100%;
      display: block;
      margin: 4em 0;
    }
  }
}
</style>
