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
    <section class="why mobile-reverse">
      <div class="left">
        <div class="content">
          <h1>Currently available for hire</h1>
          <p>I am currently searching for a junior position in a the web development industry. I dream of a strong team who can mentor me into becoming a senior developer. If your company is looking for someone like me please checkout my github account and get in touch.</p>
        </div>
      </div>
      <!-- <div class="right">
        <div class="image hire">
        </div>
      </div> -->

    </section>
    <Slide />
  </div>

</template>

<script>
import Slide from "../components/Slide.vue";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Slide
  },
  computed: {},
  methods: {},
  mounted: function() {}
};
</script>

<style lang="scss">
.home {
  padding-bottom: 40px;

  .what,
  .how,
  .why {
    display: flex;
    flex-direction: column;
  }
  .mobile-reverse {
    flex-direction: column-reverse;
  }
  .how {
    background-color: $secondary;
    color: $primary;
  }

  .image {
    height: 50vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .me {
    background-image: url("../assets/me-temp.jpg");
  }
  .laptop {
    background-image: url("../assets/experience.jpg");
  }
  .hire {
    background-image: url("../assets/hire.jpg");
  }
  .content {
    padding: 40px 40px;
    h1 {
      font-size: 40px;
      text-transform: uppercase;
      margin: 0;
      @media only screen and (min-width: 375px) {
        font-size: 48px;
      }
    }
    p {
      font-size: 18px;
      line-height: 1.7em;
    }
  }
}
</style>
