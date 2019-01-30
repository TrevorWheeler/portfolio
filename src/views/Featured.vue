<template>
  <div class="featured">

    <div class="items">

      <router-link
        :to="{ name: 'selected', params: { id: work.route } }"
        tag="a"
        class="item"
        v-for="(work, index) in works"
        :key="index"
        @click.native="selectedWork(index)"
      >
        <div class="image-container">
          <img
            :src="work.workImage"
            :alt="work.title"
          />
        </div>

        <div class="content">
          <h2>{{work.title}}</h2>
          <p>{{work.meta}}</p>
        </div>
      </router-link>

      <a
        href="https://github.com/trevorwheeler"
        class="item"
      >
        <div class="image-container">
          <img
            src="../assets/github.jpg"
            alt="My github repositories"
          />
        </div>
        <div class="content">
          <h2 class="title">Github</h2>
          <p>Repositories</p>
        </div>
      </a>

    </div>

  </div>

</template>

<script>
export default {
  name: "featured",
  components: {},
  data() {
    return {};
  },
  computed: {
    works() {
      return this.$store.state.works;
    },
    loading() {
      return this.$store.state.loading;
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
.featured {
  min-height: 100vh;
  padding: 120px 10vw 60px;
  @media only screen and (min-width: 1366px) {
    padding: 150px 0vw 120px;
    width: 1005px;
    margin: 0 auto;
  }
  display: flex;
  justify-content: center;
  .items {
    width: 100%;
    .item {
      display: flex;
      justify-content: center;
      background-color: rgba(244, 244, 244, 0.9);
      height: 100%;
      height: 50vh;
      margin: 0 0 3em 0;
      position: relative;
      transition: 0.2s linear;
      p {
        color: $secondary;
      }
      &:hover {
        background-color: rgba(41, 123, 147, 0.9);
        transition: 0.2s linear;
        color: $primary;
        p {
          color: $primary;
          transition: 0.2s linear;
        }
      }

      .image-container {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: -1;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .content {
        align-self: center;
        text-align: center;
        position: relative;
      }
    }
  }
}
</style>
