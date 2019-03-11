<template>
  <div class="website">
    <section class="hero">
      <div class="hero--mobile--name--container">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          class="hero--name"
        > Trevor Wheeler </h2>
      </div>
      <div class="hero--content--container">
        <h1
          class="summary hero--summary"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        > Web <span>Developer</span> - Problem Solver and Eager Learner </h1>
        <div class="hero--links--container">
          <div
            class="hero--link--container"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <a
              class="link hero--link hero--link--projects"
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
            <a
              class="link hero--link hero--link--contact"
              href="mailto: sendtrevmail@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>

      <svg
        class="chevron--down"
        width="46"
        height="26"
        viewBox="0 0 46 26"
        fill="none"
        v-scroll-to="'.projects'"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.3644 25.3029C22.2844 26.2324 23.7667 26.2324 24.6356 25.3029L45.2333 4.49255C46.2556 3.45978 46.2556 1.80735 45.2333 0.774578C44.2111 -0.258193 42.5756 -0.258193 41.5533 0.774578L24.6356 17.8669C23.7156 18.7964 22.2333 18.7964 21.3644 17.8669L4.44667 0.826217C3.42445 -0.206554 1.78889 -0.206554 0.766667 0.826217C-0.255556 1.85899 -0.255556 3.51142 0.766667 4.54419L21.3644 25.3029Z"
          fill="#06D6A0"
        />
      </svg>

    </section>
    <section class="projects">

      <h3 class="projects--category">Commercial Projects</h3>

      <div class="projects--container">
        <div
          class="project--item"
          v-for="(project, index) in commercial"
          :key="index"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div class="project--top">

            <h4 class="project--name">{{project.name}}</h4>
            <img
              class="cld-responsive project--img"
              :data-src="project.image"
              :alt="project.name"
              :src="project.image"
            >

            <P class="project--description">{{project.description}}</p>
          </div>

          <div class="project--bottom">
            <div class="project--tag--container">
              <div
                class="project--tag"
                v-for="(tag, index) in project.tags"
                :key="index"
              > <span>{{tag}}</span></div>
            </div>
            <div class="project--links--container">
              <a
                :href="project.link"
                target="_blank"
                rel="noreferrer"
                class="project--link project--link--live"
                v-bind:class="{ active: project.link.length == 0}"
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
                :href="project.repo"
                target="_blank"
                rel="noreferrer"
                class="project--link project--link--github"
                v-bind:class="{ active: project.repo === null}"
              >View Repo</a>
            </div>
          </div>

        </div>

      </div>

      <h3 class="projects--category">Full Stack Projects</h3>

      <div class="projects--container">
        <div
          class="project--item"
          v-for="(project, index) in fullStack"
          :key="index"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div class="project--top">

            <h4 class="project--name">{{project.name}}</h4>
            <img
              class="cld-responsive project--img"
              :data-src="project.image"
              :alt="project.name"
              :src="project.image"
            >

            <P class="project--description">{{project.description}}</p>
          </div>

          <div class="project--bottom">
            <div class="project--tag--container">
              <div
                class="project--tag"
                v-for="(tag, index) in project.tags"
                :key="index"
              > <span>{{tag}}</span></div>
            </div>
            <div class="project--links--container">
              <a
                :href="project.link"
                target="_blank"
                rel="noreferrer"
                class="project--link project--link--live"
                v-bind:class="{ active: project.link.length == 0}"
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
                :href="project.repo"
                target="_blank"
                rel="noreferrer"
                class="project--link project--link--github"
                v-bind:class="{ active: project.repo === null}"
              >View Repo</a>
            </div>
          </div>

        </div>

      </div>

      <h3 class="projects--category">Front End Projects</h3>

      <div class="projects--container">
        <div
          class="project--item"
          v-for="(project, index) in frontEnd"
          :key="index"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div class="project--top">

            <h4 class="project--name">{{project.name}}</h4>
            <img
              class="cld-responsive project--img"
              :data-src="project.image"
              :alt="project.name"
              :src="project.image"
            >

            <P class="project--description">{{project.description}}</p>
          </div>

          <div class="project--bottom">
            <div class="project--tag--container">
              <div
                class="project--tag"
                v-for="(tag, index) in project.tags"
                :key="index"
              > <span>{{tag}}</span></div>
            </div>
            <div class="project--links--container">
              <a
                :href="project.link"
                target="_blank"
                rel="noreferrer"
                class="project--link project--link--live"
                v-bind:class="{ active: project.link.length == 0}"
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
                :href="project.repo"
                target="_blank"
                rel="noreferrer"
                class="project--link project--link--github"
                v-bind:class="{ active: project.repo === null}"
              >View Repo</a>
            </div>
          </div>

        </div>

      </div>

      <h3 class="projects--category">Back End Projects</h3>

      <div class="projects--container">
        <div
          class="project--item"
          v-for="(project, index) in backEnd"
          :key="index"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div class="project--top">

            <h4 class="project--name">{{project.name}}</h4>
            <img
              class="cld-responsive project--img"
              :data-src="project.image"
              :alt="project.name"
              :src="project.image"
            >

            <P class="project--description">{{project.description}}</p>
          </div>

          <div class="project--bottom">
            <div class="project--tag--container">
              <div
                class="project--tag"
                v-for="(tag, index) in project.tags"
                :key="index"
              > <span>{{tag}}</span></div>
            </div>
            <div class="project--links--container">
              <a
                :href="project.link"
                target="_blank"
                rel="noreferrer"
                class="project--link project--link--live"
                v-bind:class="{ active: project.link.length == 0}"
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
                :href="project.repo"
                target="_blank"
                rel="noreferrer"
                class="project--link project--link--github"
                v-bind:class="{ active: project.repo === null}"
              >View Repo</a>
            </div>
          </div>

        </div>

      </div>

    </section>

    <Footer />
  </div>

</template>

<script>
import Footer from "@/components/Footer.vue";
import cloudinary from "../../node_modules/cloudinary-core/cloudinary-core-shrinkwrap.js";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Footer
  },
  computed: {
    projects() {
      return this.$store.getters.loadProjects;
    },

    commercial() {
      return this.projects.filter(filtered => filtered.commercial == true);
    },
    fullStack() {
      return this.projects.filter(filtered => filtered.fullStack == true);
    },
    frontEnd() {
      return this.projects.filter(filtered => filtered.frontEnd == true);
    },
    backEnd() {
      return this.projects.filter(filtered => filtered.backEnd == true);
    }
  },

  mounted() {
    this.$store.dispatch("loadProjects");
    var cl = cloudinary.Cloudinary.new({ cloud_name: "schmidge" });
    cl.responsive();
  }
};
</script>

<style lang="scss">
.active {
  opacity: 0.3;
  cursor: not-allowed;
  pointer-events: none;
}

.website {
  .hero {
    height: calc(100vh - 70px);
    background-color: $secondary;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 15px 0;
    transition: 0.1s;
    @media only screen and (max-height: 450px) {
      padding: 0 4em 0;
    }
    @media only screen and (min-width: 768px) {
      height: 100vh;
    }

    .hero--mobile--name--container {
      width: 100vw;
      position: absolute;
      top: 0;
      right: 0;
      text-align: center;

      @media only screen and (max-height: 450px) {
        text-align: left;
        padding: 0 4em 0;
      }
      @media only screen and (min-width: 768px) {
        display: none;
      }
      .hero--name {
        color: $primary;
        font-size: 1.8em;
        text-transform: uppercase;
        font-weight: 500;
        margin: 26px 0;
      }
    }

    .hero--content--container {
      max-width: 854px;
      align-self: center;
      padding: 45px 0 50px;
      @media only screen and (max-height: 450px) {
        display: flex;
        padding: 65px 0 50px;
      }
    }

    .summary {
      font-size: 3.6em;
      animation-delay: 0.1s;
      font-weight: 300;
      align-self: center;
      text-align: center;
      color: $primary;
      margin: 0 0 70px 0;
      letter-spacing: 1px;
      @media only screen and (min-width: 768px) {
        font-size: 5.7em;
      }
      @media only screen and (max-height: 450px) {
        padding: 0 1em 0 0;
        text-align: left;
        font-size: 3em;
        margin: 0;
      }
      @media only screen and (max-width: 320px) {
        margin: 30px 0 30px 0;
      }
      span {
        color: $accent;
        font-weight: 500;
      }
    }

    .hero--links--container {
      @media only screen and (min-width: 768px) {
        display: flex;
        width: 484px;
        margin: 0 auto;
      }
    }

    .hero--link--projects {
      margin-bottom: 35px;
      @media only screen and (min-width: 768px) {
        margin-bottom: 0;
      }
    }

    .hero--link--contact {
      transition: 1s ease-out;
      background: none;
      color: $primary;
      border: 1px solid $primary;
      transition: 0.3s ease-in-out;
      &:hover {
        box-shadow: 0px 0px 0px 4px $secondary inset,
          0px 0px 0px 6px $accent inset;
        color: $text-light;
      }
    }

    .chevron--down {
      display: none;
      position: absolute;
      bottom: 50px;
      left: calc(50% - 23px);
      cursor: pointer;
      animation: bounce 2s infinite;
      animation-delay: 2s;
      @media only screen and (min-width: 768px) {
        display: block;
      }
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
        transform: (translateY(-28px));
      }
      60% {
        transform: (translateY(-14px));
      }
    }
  }

  .projects {
    padding: 7em 1.5em 0;
    background-color: $primary;
    @media only screen and (max-height: 450px) {
      padding: 7em 4em 0;
    }
    @media only screen and (min-width: 1366px) {
      padding: 10em 1.5em 0;
    }
    @media only screen and (min-width: 1650px) {
      padding: 15em 1.5em 0;
    }

    .projects--category {
      font-weight: 600;
      font-size: 2.4em;
      color: $text-dark;
      text-transform: uppercase;
      text-align: center;
      margin: 0 0 70px 0;
      @media only screen and (min-width: 1366px) {
        margin: 0 0 100px 0;
        font-size: 2.8em;
      }
      @media only screen and (min-width: 1650px) {
        margin: 0 0 150px 0;
      }
    }

    .projects--container {
      display: flex;
      flex-direction: column;
      @media only screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
      }
      @media only screen and (min-width: 1280px) {
        width: 1255px;
        justify-content: space-between;
        margin: 0 auto;
      }
      @media only screen and (min-width: 1650px) {
        width: 1450px;
      }

      .project--item {
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.24);
        width: 100%;
        margin: 0 0 7em 0;
        display: flex;
        flex-direction: column;
        background-color: $primary;
        position: relative;
        justify-content: space-between;
        border-radius: 3px;
        overflow: hidden;
        @media only screen and (min-width: 768px) {
          width: calc(50% - 0.5em);
          margin: 0 0 7em;
          &:nth-child(odd) {
            margin-right: 0.5em;
          }
          &:nth-child(even) {
            margin-left: 0.5em;
          }
        }
        @media only screen and (min-width: 1280px) {
          width: 397px;
          &:nth-child(odd) {
            margin-right: 0;
          }
          &:nth-child(even) {
            margin-left: 0;
          }
        }
        @media only screen and (min-width: 1366px) {
          margin: 0 0 10em 0;
        }
        @media only screen and (min-width: 1650px) {
          margin: 0 0 15em 0;
          width: 450px;
        }

        .project--name {
          font-size: 2em;
          font-weight: 600;
          text-transform: uppercase;
          text-align: center;
          background-color: $secondary;
          margin: 0;
          line-height: 72px;
          color: $text-light;
        }
        .project--img {
          width: 100%;
          height: auto;
        }
        .project--description {
          margin: 1.4em 0;
          padding: 0 20px;

          font-size: 1.8em;
          font-weight: 400;
        }

        .project--tag--container {
          padding: 0 20px 25px;

          .project--tag {
            border: 2px solid $accent;
            display: inline-flex;
            margin: 0 1em 1em 0;
            border-radius: 2px;
            span {
              font-size: 14px;
              padding: 0.3em 0.5em;
              font-weight: 500;
              line-height: 1rem;
            }
          }
        }
        .project--links--container {
          display: flex;
          justify-content: space-between;
          padding: 2em 20px;
          background-color: $secondary;
          .project--link {
            color: $accent;
            text-decoration: none;
            font-size: 1.7em;
            text-transform: uppercase;
            font-weight: 600;
            position: relative;
            display: inline-block;
            svg {
              position: absolute;
              right: -23px;
              top: -0.08em;
              width: 18px;
              fill: $accent;
            }
          }
        }
      }
    }
  }
}
</style>
