<template>
  <div class="website">
    <section
      class="hero"
      id="yes"
    >
      <div class="name--container">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          class="name"
        > Trevor Wheeler </h1>
      </div>
      <div class="container">
        <h2
          class="summary"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        > Junior <span>Developer</span> - Problem Solver and Fast Learner </h2>
        <div class="hero--links--container">
          <div
            class="hero--link--container"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <a
              class="hero--link hero--link--projects"
              v-scroll-to="'.projects'"
            >
              <span>Explore Projects</span>
            </a>
          </div>
          <div
            class="hero--link--container"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <a class="hero--link hero--link--resume">
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>

      <div
        class="arrow--down--container"
        v-scroll-to="'.projects'"
      >
        <svg
          class="arrow--down"
          data-aos="fade"
          data-aos-delay="1000"
          data-aos-duration="1000"
          width="16"
          height="28"
          viewBox="0 0 16 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.29289 27.7071C7.68342 28.0976 8.31658 28.0976 8.70711 27.7071L15.0711 21.3431C15.4616 20.9526 15.4616 20.3195 15.0711 19.9289C14.6805 19.5384 14.0474 19.5384 13.6569 19.9289L8 25.5858L2.34315 19.9289C1.95262 19.5384 1.31946 19.5384 0.928933 19.9289C0.538409 20.3195 0.538409 20.9526 0.928933 21.3431L7.29289 27.7071ZM7 4.37114e-08L7 27L9 27L9 -4.37114e-08L7 4.37114e-08Z"
            fill="#FCFCFC"
          />
        </svg>
      </div>
    </section>
    <section class="projects">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        class="project-category-container"
      >
        <h3>Commercial Work</h3>
      </div>

      <div
        class="commercial--work--container"
        v-for="(work, index) in commercial"
        :key="index"
      >

        <h1>{{work.title}}</h1>
        <p
          v-for="tag in work.tag"
          :key="tag.name"
        > {{tag.name}}</p>

      </div>

    </section>

  </div>

</template>

<script>
export default {
  name: "home",
  data() {
    return {
      windowHeight: null
    };
  },
  components: {},
  computed: {
    commercial() {
      return this.$store.state.commercial;
    },
    commercialTags() {
      return Array.from(
        Array(Math.ceil(this.articles.length / this.itemsPerRow)).keys()
      );
    }
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss">
.website {
  .hero {
    height: calc(100vh - 70px);
    background-color: $secondary;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2em 2em;
    transition: 0.1s;
    @media only screen and (min-width: 768px) {
      padding: 0 4em 4em;
    }
    .name--container {
      width: 100vw;
      position: absolute;
      top: 0;
      right: 0;
      text-align: center;
      @media only screen and (min-width: 768px) {
        display: none;
      }
    }

    .container {
      max-width: 854px;
      margin: 0 auto;
    }

    .name {
      color: $primary;
      font-size: 1.8em;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 1px;
      margin: 26px 0;
    }
    .summary {
      font-size: 3.6em;
      animation-delay: 0.1s;
      font-weight: 300;
      align-self: center;
      text-align: center;
      color: $primary;
      margin: 1em 0 1em 0;
      @media only screen and (min-width: 768px) {
        font-size: 5.5em;
      }
      span {
        color: $accent;
        font-weight: 400;
      }
    }

    .hero--links--container {
      @media only screen and (min-width: 768px) {
        display: flex;
        width: 484px;
        margin: 0 auto;
      }
    }

    .hero--link {
      width: 220px;
      height: 62px;
      color: $secondary;
      display: flex;
      cursor: pointer;
      justify-content: center;
      margin: 3em auto;
      transition: 0.3s linear !important;
      @media only screen and (min-width: 768px) {
        margin: 1em;
      }

      span {
        align-self: center;
        font-size: 18px;
      }
    }
    .hero--link--projects {
      background-color: $accent;
      &:hover {
        box-shadow: 0px 0px 0px 3px $accent inset,
          0px 0px 0px 6px $secondary inset;
      }
      &:active {
        transform: scale(0.9);
      }
    }
    .hero--link--resume {
      transition: 1s ease-out;
      margin-bottom: 55px;
      background-color: transparent;
      border: 2px solid $primary;
      span {
        color: $primary;
      }
      &:hover {
        box-shadow: 0px 0px 0px 3px $secondary inset,
          0px 0px 0px 6px $accent inset;
      }
      &:active {
        transform: scale(0.9);
      }
    }

    .arrow--down--container {
      display: none;
      width: 100%;
      position: absolute;
      bottom: 50px;
      left: 0;
      @media only screen and (min-width: 768px) {
        display: flex;
        justify-content: center;
      }
    }
    .arrow--down {
      display: block;
      cursor: pointer;
      animation: bounce 2s infinite;
      animation-delay: 2s;
    }
    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: (translateY(0));
      }
      40% {
        transform: (translateY(-30px));
      }
      60% {
        transform: (translateY(-15px));
      }
    }
  }

  .projects {
    background-color: $primary;
    height: 1000px;
    padding: 20px 0;
    .project-category-container {
      display: flex;
      justify-content: center;
      h3 {
        padding: 0 0 0.2em 0;
        font-weight: 400;
        font-size: 2.4em;
        display: inline-block;
        border-bottom: 4px solid $accent;
      }
    }
  }
}
</style>
