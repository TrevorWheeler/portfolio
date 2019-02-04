
<template>

  <div class="work-page">

    <div
      class="content"
      v-for="(active, index) in activeWork"
      :key="index"
    >
      <div class="first-work">
        <h1>{{active.title}}</h1>
        <div class="link">
          <a
            class="btn website-link"
            :href="active.website"
            target="_blank"
          > <span>Visit Website</span> </a>
        </div>
        <p> {{active.description }} </p>
        <img
          :src="active.image"
          :alt="active.title"
        />
      </div>
      <div
        class="divider"
        v-if="active.secondImage === true"
      ></div>
      <div
        class="second-work"
        v-if="active.secondImage === true"
      >
        <div class="content">
          <img
            :src="active.imageTwo"
            :alt="active.title"
          />

        </div>
      </div>
      <div class="prev-next">
        <div class="contents">
          <a
            class="btn"
            v-on:click="prev()"
            v-bind:class="{ active: currentIndex !== 1 }"
          >
            <span>Prev</span>
          </a>
          <a
            class="btn"
            v-on:click="next()"
            v-bind:class="{ active: currentIndex !== 0 }"
          >
            <span>Next</span>
          </a>
        </div>
      </div>
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
      this.$store.commit("sandyPagesBooks");
      this.$router.push({
        name: "selected",
        params: { id: "sandypagesbooks" }
      });
    },
    checkRoute() {
      if (this.$route.path === "/thecaf") {
        this.$store.commit("thecaf");
      } else if (this.$route.path === "/sandypagesbooks") {
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
.work-page {
  padding: 40px 10vw;
  @media only screen and (min-width: 1366px) {
    padding: 40px 20vw;
  }
  @media only screen and (min-width: 2000px) {
    padding: 40px 25vw;
  }
  .active {
    opacity: 0.3;
    pointer-events: none;
  }
  img {
    width: 100%;
    display: block;
    margin: 6em 0;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  .first-work {
    padding: 100px 0 0px;
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
  }
  .prev-next {
    padding: 0px 0 40px;

    .contents {
      a {
        cursor: pointer;
        &:nth-of-type(even) {
          margin-top: 3em;
        }
      }

      @media only screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        a {
          width: 200px;
          margin: 0;
          cursor: pointer;
        }
      }
      @media only screen and (min-width: 1024px) {
        a {
          width: 350px;
          margin: 0;
        }
      }
    }
  }

  // .btn {
  //   display: block;
  //   height: 50px;
  //   background-color: $secondary;
  //   display: flex;
  //   justify-content: center;
  //   margin: 0 auto;
  //   &:hover {
  //    background-color: $accent;
  //     span {
  //       color: $secondary;
  //     }
  //   }

  //   &:nth-of-type(even) {
  //     margin-top: 3em;
  //   }
  //   @media only screen and (min-width: 768px) {
  //     &:nth-of-type(even) {
  //       margin: 0em;
  //     }
  //   }
  //   @media only screen and (min-width: 1366px) {
  //     width: 350px;
  //   }
  //   span {
  //     font-size: 20px;
  //     color: $primary;
  //     align-self: center;
  //     font-weight:400;
  //   }
  // }
}

.website-link {
  margin: 60px 0;
  max-width: 350px;
}

.divider {
  margin: 60px auto;
  width: 100%;
  height: 50px;
  background-color: $secondary;
  border: 20px solid $accent;
}
</style>
