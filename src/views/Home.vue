<template>
  <div class="home">
    <section class="first mobile-reverse ">
      <div class="left about">
        <div class="content">
          <h1>I build websites with the client in mind</h1>
          <p>I completed my Diploma of Interactive Digital Media at the Southbank Institute of technology and loved all that I did. I have knowledge in design, animation, video editing and web development; where my passion resides. After completing my studies I have continued the pursuit of advancing my knowledge in all aspects of interactive media. Exploring solutions to bring my client online is what I do. Find some of my featured works in the menu.</p>
          <a
            class="btn"
            v-on:click="$store.commit('menuState')"
          >
            <span>Open Menu</span>
          </a>
        </div>
      </div>
      <div class="right">
        <div class="image me">
        </div>
      </div>
    </section>

    <section class="second">
      <div class="left">
        <div class="image laptop">
        </div>
      </div>
      <div class="right experience">
        <div class="content">
          <h1>Experience in the industry</h1>
          <p>I have several years of experience in HTML, CSS & Javascript for the front-end and Node.js, express & MongoDB for the back-end. I love to keep up to date with the latest technologies and the thrill of solving a problem is what keeps me coming back for more. I have recently worked freelance with some amazing small businesses to help bring their product online.</p>
          <a
            class="btn github-link"
            href="https://github.com/trevorwheeler"
          >
            <span>Github</span>
          </a>
        </div>
      </div>

    </section>
    <section class="third">
      <div class="content">
        <h1>Currently Available for Hire</h1>
        <p>I am currently searching for a junior position in the web development industry. I dream of a strong team who can mentor me into becoming a senior developer. If your company is looking for someone like me please check out my Github account and get in touch.</p>
        <div class="links-container">
          <a
            class="btn"
            href="https://github.com/trevorwheeler"
          ><span>Github</span>
          </a>
          <a
            class="btn"
            href="mailto:sendtrevmail@gmail.com"
            target="_blank"
          ><span>Contact</span>
          </a>
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
    menuActive() {
      return this.$store.state.menuActive;
    }
  },
  methods: {}
};
</script>

<style lang="scss">
.home {
  padding-top: 50vh;
  @media only screen and (min-width: 1366px) {
    padding-top: 0;
  }
  .about,
  .experience,
  .third {
    display: flex;
    .content {
      margin: 5em 4vw;
      align-self: center;
    }
  }
  .first .right {
    position: fixed;
    width: 100vw;
    height: 50vh;
    top: 0;
    z-index: -1;
    @media only screen and (min-width: 1366px) {
      position: inherit;
      width: inherit;
      height: inherit;
      z-index: inherit;
    }
  }
  .about {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background-color: $primary;
    @media only screen and (min-height: 768px) {
      min-height: 50vh;
    }
    @media only screen and (min-width: 1366px) {
      min-height: 100vh;
      width: 50vw;
    }
  }

  .first,
  .second {
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 1366px) {
      flex-direction: row;
      min-height: 100vh;
    }
  }
  .first .right {
    overflow: hidden;
  }
  .second .left {
    overflow: hidden;
  }

  .mobile-reverse {
    flex-direction: column-reverse;
    @media only screen and (min-width: 1366px) {
      flex-direction: row;
    }
  }

  .second {
    background-color: $secondary;
    color: $primary;
    .right {
      display: flex;
      .content {
        align-self: center;
        p {
          color: $text-light;
        }
      }
    }
    .left {
      display: none;
      @media only screen and (min-width: 1366px) {
        display: block;
      }
    }
    .experience {
      display: flex;
      min-height: 100vh;
      justify-content: center;
      @media only screen and (min-height: 768px) {
        min-height: 50vh;
      }
      @media only screen and (min-height: 768px) {
        height: initial;
      }
      @media only screen and (min-height: 1024px) {
        height: 50vh;
      }
      @media only screen and (min-width: 1366px) {
        height: 100vh;
        width: 50vw;
      }
    }
  }

  .image {
    height: 50vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media only screen and (min-width: 1366px) {
      width: 50vw;
      height: 100vh;
    }
  }

  .me {
    background-image: url("../assets/me.jpg");
    background-position: 46% 50%;
  }
  .laptop {
    background-image: url("../assets/laptop.jpg");
  }
  .content {
    @media only screen and (min-width: 768px) {
      width: 662px;
      padding: 0;
    }
    p {
      margin-bottom: 2em;
    }
  }

  .third {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background-color: $primary;
    @media only screen and (min-width: 768px) {
      min-height: initial;
    }
    @media only screen and (min-height: 1024px) {
      min-height: 50vh;
    }
    @media only screen and (min-width: 1366px) {
      text-align: center;
      height: 100vh;
    }
    @media only screen and (min-width: 1366px) {
      .content {
        width: 600px;
      }
    }
    .content {
      align-self: center;
      .links-container {
        @media only screen and (min-width: 1366px) {
          display: flex;
          justify-content: space-between;
          margin: 4em 0 0 0;
        }
        .btn {
          &:nth-of-type(even) {
            margin-top: 1em;
            @media only screen and (min-width: 1366px) {
              margin: 0 auto;
            }
          }
          @media only screen and (min-width: 1366px) {
            margin: 0 auto;
            width: 250px;
          }
        }
      }
    }
  }
}
</style>
