<template>
  <div class="home">
    <section class="first mobile-reverse ">
      <div class="left about">
        <div class="content">
          <h1>I build websites with the client in mind</h1>
          <p>I completed my Diploma of Interactive Digital Media at the Southbank Institute of technology and loved all that I did. I have knowledge in design, animation, video editing and web development; where my passion resides. After completing my studies I have continued the pursuit of advancing my knowledge in all aspects of interactive media. Exploring solutions to bring my client online is what I do. Find some of my featuredd works in the menu.</p>
          <a class="btn"  v-on:click="$store.commit('menuState')">
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
        <h1>Available for hire</h1>
        <p>I am currently searching for a junior position in the web development industry. I dream of a strong team who can mentor me into becoming a senior developer. If your company is looking for someone like me please check out my Github account and get in touch.</p>
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
  .about {
    display: flex;
    justify-content: center;
    @media only screen and (min-height: 1024px) {
      height: 50vh;
      .content {
        align-self: center;
      }
    }
    @media only screen and (min-height: 1024px) {
      height: 50vh;
      .content {
        align-self: center;
      }
    }
    @media only screen and (min-width: 1366px) {
      height: 100vh;
    }
  }

  .experience {
    display: flex;
    height: 100vh;
    justify-content: center;
    @media only screen and (min-height: 768px) {
      height: initial;
      .content {
        align-self: center;
      }
    }
    @media only screen and (min-height: 1024px) {
      height: 50vh;
    }
    @media only screen and (min-width: 1366px) {
      height: 100vh;
    }
    .btn {
      background-color: $accent-third;
      color: $secondary;
      &:hover {
        background-color: $accent;
        color: $primary;
      }
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
  }

  .second .left {
    display: none;
    @media only screen and (min-width: 1366px) {
      display: block;
    }
  }

  .first .about {
    @media only screen and (min-width: 1366px) {
      width: 50vw;
    }
  }

  .second .experience {
    @media only screen and (min-width: 1366px) {
      width: 50vw;
    }
    .content {
      align-self: center;
    }
  }

  .about,
  .experience {
    display: flex;
    .content {
      margin: 6em 4vw 8em;
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
    @media only screen and (min-width: 1366px) {
      align-self: center;
    }

    p {
      @media only screen and (min-width: 1366px) {
        font-size: 18px;
      }
    }
  }

  .third {
    height: 100vh;
    display: flex;
    justify-content: center;
    margin: 6em 4vw 0em;
    @media only screen and (min-width: 768px) {
      min-height: initial;
    }
    @media only screen and (min-height: 1024px) {
      height: 50vh;
    }
    @media only screen and (min-width: 1366px) {
      text-align: center;

      height: 100vh;
    }
    .content {
      align-self: center;

      @media only screen and (min-width: 1366px) {
        text-align: center;
        // width: 750px;
      }

      .btn {
        background-color: $accent;
        &:hover {
          background-color: $accent-third;
        }
        &:nth-of-type(even) {
          margin-top: 1.4em;
        }
        @media only screen and (min-width: 1366px) {
          margin: 0 auto;
          // margin-bottom: 40px;
        }
      }
    }
  }
}
</style>
