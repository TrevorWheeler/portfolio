
<template>
  <div class="selected-work">
    <div
      class="container"
      v-for="(active, index) in activeWork"
      :key="index"
    >
      <h3>{{active.title}}</h3>
      <div class="links">
        <a
          :href="active.website"
          target="_blank"
        > <span>Visit Website</span> </a>
      </div>
      <p> {{active.description }} </p>
      <img
        :src="active.image"
        :alt="active.title"
      />
      <div
        class="divider"
        v-if="active.secondImage === true"
      ></div>
      <img
        :src="active.imageTwo"
        :alt="active.title"
        v-if="active.secondImage === true"
      />
      <div class="container">
        <div class="links buttons">
          <button
            v-on:click="prev()"
            :disabled="currentIndex === 0"
          >
            <span>Prev</span>
          </button>
          <button
            v-on:click="next()"
            :disabled="currentIndex === 1"
          >
            <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "selected",
  props: ["id"],
  computed: {
    works() {
      return this.$store.state.works;
    },
    //filter object where value for active = true
    activeWork: function() {
      return this.works.filter(function(a) {
        return a.active;
      });
    },
    //find current index of works array
    currentIndex: function() {
      return this.works.findIndex(item => item.active === true);
    }
  },
  methods: {
    prev() {
      this.$store.commit("thecaf");
      this.$router.push({ name: "selected", params: { id: "thecaf" } });
    },
    next() {
      this.$store.commit("sandypages");
      this.$router.push({
        name: "selected",
        params: { id: "sandypagesbooks" }
      });
    },
    checkRoute() {
      if (this.$route.path === "/featured/thecaf") {
        this.$store.commit("thecaf");
      } else if (this.$route.path === "/featured/sandypagesbooks") {
        this.$store.commit("sandyPagesBooks");
      }
    }
  },
  mounted() {
    this.checkRoute();
  }
};
</script>

<style lang="scss">
.selected-work {
  padding: 120px 10vw 60px;
  @media only screen and (max-width: 375px) {
    padding: 100px 15px 60px;
  }
  @media only screen and (min-width: 1366px) {
    padding: 150px 0vw 120px;
    width: 1005px;
    margin: 0 auto;
  }
  .container {
    .website {
      text-transform: uppercase;
      color: $accent;
    }
    a {
      margin: 0 0 3em 0;
    }
    img {
      width: 100%;
      display: block;
      margin: 4em 0;
    }
    .divider {
      margin: 60px auto;
    }
  }
}
</style>
