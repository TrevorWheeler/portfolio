<template>
  <div class="website">
    <section class="hero">
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
      <div class="project-category-container">
        <h3>Commercial Work</h3>
      </div>

      <div class="work--container work--container--commercial">

        <div
          class="work--item"
          v-for="(work, index) in works[0].commercial"
          :key="index"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div class="border--breaker">
            <div class="border-breaker-content">
              <span>. . .</span>
            </div>
          </div>
          <h4 class="work--title">{{work.title}}</h4>
          <img
            class="work--img"
            :src="work.image"
          >
          <div class="work--height--fix">
            <P class="work--description">{{work.description}}</p>
            <div class="work--bottom">
              <div class="work--tag--container">
                <div
                  class="work--tag"
                  v-for="tag in work.tag"
                  :key="tag.name"
                > <span>{{tag.name}}</span></div>
              </div>
              <div class="work--links--container">
                <a
                  href="#"
                  class="work--link work--link--live"
                >Live Site
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M0 0h24v24H0z"
                      fill="none"
                    />
                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" /></svg></a>
                <a
                  href="#"
                  class="work--link work--link--github"
                >View Repo</a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="project-category-container">
        <h3>Full Stack Apps</h3>
      </div>

      <div class="work--container work--container--commercial">

        <div
          class="work--item"
          v-for="(work, index) in works[1].fullStack"
          :key="index"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div class="border--breaker">
            <div class="border-breaker-content">
              <span>. . .</span>
            </div>
          </div>
          <h4 class="work--title">{{work.title}}</h4>
          <img
            class="work--img"
            :src="work.image"
          >
          <div class="work--height--fix">
            <P class="work--description">{{work.description}}</p>
            <div class="work--bottom">
              <div class="work--tag--container">
                <div
                  class="work--tag"
                  v-for="tag in work.tag"
                  :key="tag.name"
                > <span>{{tag.name}}</span></div>
              </div>
              <div class="work--links--container">
                <a
                  href="#"
                  class="work--link work--link--live"
                >Live Site
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M0 0h24v24H0z"
                      fill="none"
                    />
                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" /></svg></a>
                <a
                  href="#"
                  class="work--link work--link--github"
                >View Repo</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="project-category-container">
        <h3>Front End Apps</h3>
      </div>

      <div class="work--container work--container--commercial">

        <div
          class="work--item"
          v-for="(work, index) in works[2].frontEnd"
          :key="index"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div class="border--breaker">
            <div class="border-breaker-content">
              <span>. . .</span>
            </div>
          </div>
          <h4 class="work--title">{{work.title}}</h4>
          <img
            class="work--img"
            :src="work.image"
          >
          <div class="work--height--fix">
            <P class="work--description">{{work.description}}</p>
            <div class="work--bottom">
              <div class="work--tag--container">
                <div
                  class="work--tag"
                  v-for="tag in work.tag"
                  :key="tag.name"
                > <span>{{tag.name}}</span></div>
              </div>
              <div class="work--links--container">
                <a
                  href="#"
                  class="work--link work--link--live"
                >Live Site
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M0 0h24v24H0z"
                      fill="none"
                    />
                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" /></svg></a>
                <a
                  href="#"
                  class="work--link work--link--github"
                >View Repo</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section class="hero footer">
      <div class="container">
        <h2 class="footer--summary summary"> <span>Thanks</span> for taking the time to check out my portfolio. </h2>
        <p class="footer--build"> Built with Vue, Vuex, Node.js, Express, MongoDb and Axios</p>
        <div class="hero--links--container footer--link--container">
          <div class="hero--link--container">
            <a class="hero--link hero--link--projects">
              <span>Source Code</span>
            </a>
          </div>

        </div>
      </div>

    </section>

  </div>

</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  components: {},
  computed: {
    works() {
      return this.$store.state.works;
    },
    projects() {
      return this.$store.state.projects;
    }
  },
  methods: {},
  mounted() {
    // this.$store.commit("setLoading", true);
    // axios
    //   .get(url + "/projects")
    //   .then(response => {
    //     const data = response.data;
    //     this.$store.commit("setProjects", data);

    //     this.$store.commit("setLoading", false);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     this.$store.commit("setLoading", false);
    //   });
    this.$store.dispatch("loadProjects");
  }
};
</script>

<style lang="scss">
.website {
  .hero {
    height: calc(100vh - 70px);
    background-color: $secondary;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2em 0;
    transition: 0.1s;

    @media only screen and (min-width: 768px) {
      padding: 0 4em 4em;
      height: 100vh;
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
      @media only screen and (max-height: 450px) {
        display: flex;
      }
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
      font-weight: 200;
      align-self: center;
      text-align: center;
      color: $primary;
      margin: 1em 0 1em 0;
      @media only screen and (min-width: 768px) {
        font-size: 5.7em;
      }
      @media only screen and (max-height: 450px) {
        padding: 0 2em 0 0;
        text-align: left;
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
      border-radius: 3px;
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
        font-weight: 600;

        letter-spacing: 1px;
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
      margin-bottom: 40px;
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
    padding: 2em 1em;
    background-color: $primary;
    // @media only screen and (min-width: 1366px) {
    //   margin: 0 auto;
    //   width: 1340px;
    // }
    .project-category-container {
      display: flex;
      justify-content: center;
      margin: 0 0 30px 0;
      @media only screen and (min-width: 1024px) {
        margin: 30px 0;
      }
      h3 {
        padding: 0 0 0.2em 0;
        font-weight: 400;
        font-size: 2.4em;
        display: inline-block;
        border-bottom: 4px solid $accent;
      }
    }
    .work--container {
      display: flex;
      flex-direction: column;
      @media only screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
      }
      @media only screen and (min-width: 1024px) {
        margin: 0 0 5em;
      }
      @media only screen and (min-width: 1280px) {
        max-width: 1255px;
        margin: 0 auto;
      }
      .work--item {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
          0 6px 6px rgba(0, 0, 0, 0.23);
        width: 100%;
        margin: 0 0 40px 0;
        border: 1px solid $grey;
        position: relative;
        padding: 0 0 1em 0;
        border-radius: 2px;
        @media only screen and (min-width: 768px) {
          width: calc(50% - 0.5em);
          margin: 0 0 4em;
          &:nth-child(odd) {
            margin-right: 0.5em;
          }
          &:nth-child(even) {
            margin-left: 0.5em;
          }
        }
        @media only screen and (min-width: 1280px) {
          margin: 0 1em;
          width: 397px;
        }

        .border--breaker {
          position: absolute;
          height: 20px;
          width: 65px;
          background-color: $primary;
          transform: translateX(-50%);
          top: -15px;
          left: 50%;
          display: flex;
          justify-content: center;
          span {
            font-size: 2.4em;
            font-weight: 600;
            align-self: center;
            line-height: 1rem;
          }
        }
        .work--title {
          font-size: 2em;
          font-weight: 600;
          text-transform: uppercase;
          text-align: center;
          color: black;
        }
        .work--img {
          width: 100%;
        }

        .work--height--fix {
          @media only screen and (min-width: 768px) {
            display: flex;
            flex-direction: column;
            height: 355px;
            justify-content: space-between;
          }
        }
        .work--description {
          margin: 1.4em 0;
          padding: 0 1em;
          font-size: 1.6em;
          @media only screen and (min-width: 768px) {
            padding: 0 15px;
          }
        }

        .work--tag--container {
          padding: 0 4vw;
          @media only screen and (min-width: 768px) {
            padding: 0 15px;
          }
          @media only screen and (min-width: 1366px) {
            padding: 0 2rem;
          }
          .work--tag {
            border: 1px solid $accent;
            display: inline-flex;
            margin: 0 1em 1em 0;
            border-radius: 3px;
            span {
              font-size: 12px;
              padding: 0.5em;
              font-weight: 600;
            }
          }
        }
        .work--links--container {
          display: flex;
          justify-content: space-between;
          padding: 2em 4vw 1em;
          @media only screen and (min-width: 768px) {
            padding: 2em 15px 1em;
          }
          @media only screen and (min-width: 1366px) {
            padding: 2em 2rem 1em;
          }
          .work--link {
            color: $secondary;
            text-decoration: none;
            font-size: 1.8em;
            text-transform: uppercase;
            font-weight: 600;
            svg {
              position: relative;
              top: 3px;
              width: 19px;
              fill: #000000;
            }
          }
        }
      }
    }
  }

  .footer {
    height: 100%;
    margin-bottom: 70px;
    padding-top: 50px;
    @media only screen and (min-width: 768px) {
      margin-bottom: 0;
      padding-top: 50px;
    }
    .footer--build {
      color: $primary;
      font-weight: 200;
      text-align: center;
      padding: 1em;
    }
    .footer--link--container {
      justify-content: center;
      padding-bottom: 4em;
    }
  }
}
</style>
