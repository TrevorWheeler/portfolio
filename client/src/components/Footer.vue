<template>
  <section class="footer">
    <div class="container">
      <h5 class="footer--heading"> <span>Thanks</span> for taking the time to check out my portfolio. </h5>
      <p class="footer--build"> Built with Vue, Vuex, Node.js, Express, MongoDb, JWT and Axios on Digital Ocean VPS.</p>
      <a class="link footer--source--link" href="https://github.com/TrevorWheeler/portfolio" target="_blank">
        <span>Source Code</span>
      </a>
      <p
        class="footer--scroll--top"
        v-scroll-to="'.website'"
      >Back to top</p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  height: 100%;
  padding: 7em 15px 13em;

  @media only screen and (min-width: 768px) {
    padding: 7em 4em 4rem;
  }
  @media only screen and (max-height: 450px) {
    padding: 7em 15px 12em;
  }
  @media only screen and (min-width: 1366px) {
    padding: 10em 4em;
  }
  @media only screen and (min-width: 1650px) {
    padding: 15em 4em;
  }

  .footer--heading {
    margin: 0 0 40px 0;
    text-align: center;
    align-self: center;
    color: $primary;
    font-size: 3.6em;
    font-weight: 300;
    @media only screen and (min-width: 768px) {
      font-size: 3.6em;
      margin: 0 0 70px 0;
    }
    @media only screen and (min-width: 1366px) {
      margin: 0 auto 40px;
    }
    @media only screen and (min-width: 1920px) {
      font-size: 5em;
    }
  }
  .footer--build {
    color: $primary;
    font-weight: 400;
    text-align: center;
    padding: 0 1em;
    margin: 0 0 30px 0;

    @media only screen and (min-width: 768px) {
      margin: 0 0 40px 0;
      max-width: 450px;
      margin: 0 auto 40px;
      font-weight: 300;
    }
  }
  .footer--source--link {
    margin: 0 auto 0rem;
    @media only screen and (min-width: 768px) {
      margin: 0 auto 7em;
    }
  }

  .footer--scroll--top {
    cursor: pointer;
    display: none;
    margin: 0 auto;
    color: $primary;
    text-align: center;
    font-size: 1.8em;
    font-weight: 600;
    transition: 0.2s linear;
    @media only screen and (min-width: 768px) {
      display: block;
    }
    &:hover {
      color: $accent;
      transition: 0.2s linear;
    }
  }
}
</style>
