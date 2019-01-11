<template>
  <div class="works">

    <div class="items">

      <router-link
        :to="{ name: 'work', params: { id: work.route } }"
        tag="a"
        class="item"
        v-for="(work, index) in works"
        :key="index"
        v-on:click="selectedWork(index)"
      >
        <div class="content">
          <h2 class="title">{{work.title}}</h2>
        </div>
      </router-link>

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
  .items {
    width: 100%;
    .item {
      height: 50vh;
      display: flex;
      background-color: $primary;
      transition: 0.3s linear;
      justify-content: center;
      &:nth-of-type(odd) {
        background-color: $secondary;
      }
      &:nth-of-type(odd) .content h2 {
        color: $primary;
      }
      &:nth-of-type(odd) .content p {
        color: $primary;
      }

      .content {
        align-self: center;
        text-align: center;
        .title {
          text-transform: uppercase;
          font-size: 30px;
          align-self: center;
          line-height: 1em;
          font-weight: 600;
          transition: 0.3s linear;
          color: $secondary;
        }

        p {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
