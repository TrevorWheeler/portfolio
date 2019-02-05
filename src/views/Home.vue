<template>
  <div class="home">
    <section class="what mobile-reverse">
      <div class="left">
        <div class="content">
          <h1>I build websites with the client in mind</h1>
          <p>I completed my Diploma of Interactive Digital Media at the Southbank Institute of technology and loved all that i did. I have knowledge in design, animation, video editing and web development; where my passion resides. After completing my studies i have continued the pursuit of advancing my knowledge in all aspects of interactive media. Exploring solutions to bring my client online is what i do. </p>
        </div>
      </div>
      <div class="right">
        <div class="image me">
        </div>
      </div>
    </section>

    <section class="how">
      <div class="left">
        <div class="image laptop">
        </div>
      </div>
      <div class="right">
        <div class="content">
          <h1>Experience in the industry</h1>
          <p>I have several years of experience in HTML, CSS & Javascript for the front-end and Node.js, express & MongoDB for the back-end. I love to keep up to date with the latest technologies and the thrill of solving a problem is what keeps me coming back for more. I have recently worked freelance with some amazing small businesses to help bring their product online.</p>
        </div>
      </div>

    </section>
    <section class="hire-me">
      <div class="content">
        <h1>Available for hire</h1>
        <p>I am currently searching for a junior position in a the web development industry. I dream of a strong team who can mentor me into becoming a senior developer. If your company is looking for someone like me please checkout my github account and get in touch.</p>
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
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
.home {
  .what,
  .how {
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 768px) {
      min-height: 100vh;
    }
    @media only screen and (min-width: 1366px) {
      flex-direction: row;
    }
  }

  .mobile-reverse {
    flex-direction: column-reverse;
    @media only screen and (min-width: 1366px) {
      flex-direction: row;
    }
  }

  .how {
    background-color: $secondary;
    color: $primary;
    .right {
      min-height: 100vh;
      display: flex;
      .content {
        align-self: center;
      }
    }
  }

  .how .left {
    display: none;
    @media only screen and (min-width: 1366px) {
      display: block;
    }
  }

  .left,
  .right {
    @media only screen and (min-width: 1366px) {
      display: flex;
    }
  }

  .image {
    height: 50vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media only screen and (min-width: 1366px) {
      width: calc(50vw - 8px);
      height: 100vh;
    }
  }

  .me {
    background-image: url("../assets/me.jpg");
  }
  .laptop {
    background-image: url("../assets/laptop.jpg");
  }
  .content {
    padding: 40px;
    @media only screen and (min-width: 768px) {
      padding: 100px 10vw;
    }
    @media only screen and (min-width: 1366px) {
      align-self: center;
      padding: 40px 100px;
    }
    @media only screen and (min-width: 1920px) {
      padding: 160px;
    }
    @media only screen and (min-width: 2560px) {
      padding: 350px;
    }
    h1 {
      font-size: 40px;
      text-transform: uppercase;
      margin: 0;
      @media only screen and (min-width: 375px) {
        font-size: 48px;
      }
      @media only screen and (min-width: 768px) {
        font-size: 60px;
      }
      @media only screen and (min-width: 1366px) {
        font-size: 48px;
      }
    }
    p {
      font-size: 18px;
      line-height: 1.4em;
      @media only screen and (min-width: 768px) {
        font-size: 20px;
        margin: 30px 0 0 0;
      }
      @media only screen and (min-width: 1366px) {
        font-size: 18px;
      }
    }
  }

  .hire-me {
    min-height: 100vh;
    display: flex;
    @media only screen and (min-width: 768px) {
      justify-content: center;
    }
    .content {
      align-self: center;
      padding: 30px;
      @media only screen and (min-width: 768px) {
        text-align: center;
        width: 750px;
      }
      p {
        margin-bottom: 30px;
        @media only screen and (min-width: 768px) {
          margin-bottom: 50px;
        }
      }
      .btn {
        margin: 0 auto;
        &:nth-of-type(even) {
          margin-top: 3em;
        }
      }
    }
  }
}
</style>
