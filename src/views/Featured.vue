<template>
  <div class="works">
    <div class="content">
      <div class="items">
        <div
          class="item"
          v-for="(work, index) in works"
          :key="index"
          v-on:click="selectedWork(index)"
        >
          
            <router-link
              :to="{ name: 'work', params: { id: work.route } }"
              tag="a"
              class="title"
            > {{work.title}}</router-link>
         
        </div>
      </div>
    </div>
    <Slide />
  </div>

</template>

<script>
import Slide from "../components/Slide.vue";
export default {
  name: "featured",
  components: {
    Slide
  },
  data() {
    return {};
  },
  computed: {
    works() {
      return this.$store.state.works;
    }
  },
  methods: {
    selectedWork(index) {
      this.$store.commit("selected", index);
    }
  }
};
</script>

<style lang="scss">
.works {
  min-height: 100vh;
  background-color: $primary;
  display: flex;
  justify-content: center;
  .content {
    width: 100%;
    .items {
      .item {
        height: 50vh;
        display: flex;
        background-color: $primary;
        transition: 0.3s linear;
        justify-content: center;
        &:nth-of-type(odd) {
          background-color: $secondary;
          // color: $primary;
        }
        &:nth-of-type(odd) a {
          color: $primary;
        }
        .title {
          text-transform: uppercase;
          font-size: 20px;
          align-self: center;
          line-height: 1em;
          font-weight: 600;
          transition: 0.3s linear;
          color: $secondary;
        }
      }
    }
  }
}
</style>
