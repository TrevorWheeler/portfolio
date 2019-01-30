<template>
  <section class="main">
    <img
      class="me"
      src="../assets/me.jpg"
      alt="Trevor Wheeler"
    >
    <div class="container">
      <h2>Full Stack Developer</h2>
      <div class="divider"></div>
      <p> Hello, my name is Trevor Wheeler and I completed my Diploma of Interactive Digital Media at the Southbank Institute of technology and loved all that i did. I have knowledge in design, animation, video editing and web development; where my passion resides. After completing my studies i have continued the pursuit of advancing my knowledge in all aspects of interactive media. </p>
    </div>
    <div class="container skills">
      <h3>Skills</h3>
      <p>HTML5, CSS3, Javascript, Node, Express, Vue, MongoDb, SASS, Webpack, Windows, Macintosh,
        Ubuntu, Adobe CC, Figma</p>
    </div>
    <div class="container">
      <h3>More</h3>
      <p>Egoless Team Player<br>
        Eager problem solver<br>
        Enjoys new technologies<br>
        Open to criticism</p>
    </div>
    <div class="container">
      <h2>Interested?</h2>
      <div class="divider"></div>
      <p>I am currently searching for a junior position in a the web development industry. If your company is looking for someone like me please checkout my github account and get in touch.</p>
      <div class="links">
        <a
          href="https://github.com/trevorwheeler"
          target="_blank"
        >
          <span>Github</span>
        </a>
        <a
          href="mailto:sendtrevmail@gmail.com"
          target="_blank"
        >
          <span>Contact</span>
        </a>
      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: "home",

  computed: {
    loading() {
      return this.$store.state.loading;
    },
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
.main {
  padding: 120px 10vw 40px;
  @media only screen and (max-width: 375px) {
    padding: 120px 15px 60px;
  }
  @media only screen and (min-width: 1366px) {
    padding: 150px 0 120px;
    width: 1005px;
    margin: 0 auto;
  }

  .me {
    width: 100%;
    max-width: 405px;
    margin: 0 0 30px 0;
    @media only screen and (max-height: 1000px) {
      max-width: 305px;
    }
    @media only screen and (min-width: 1920px) {
      margin: 0 0 60px 0;
    }
  }
  .container {
    margin: 0 0 30px 0;
    max-width: 920px;
    @media only screen and (min-width: 1920px) {
      margin: 0 0 60px 0;
    }
  }
  .skills {
    max-width: 325px;
  }
}
</style>
