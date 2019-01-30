<template>
  <footer v-bind:class="{ changing: changePage}">
    <p>© 2019 Trevor Wheeler, Full Stack Developer</p>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  computed: {
    changePage() {
      return this.$store.state.changePage;
    }
  }
};
</script>

<style lang="scss">
footer {
  display: flex;
  justify-content: center;
  height: 12em;
  width: 100%;
  background-color: $silver;
  @media only screen and (min-width: 1920px) {
    height: 20em;
  }
  @media only screen and (min-width: 2560px) {
    height: 27em;
  }
  p {
    align-self: center;
    font-size: 1.6em;
    color: $text;
  }
}
</style>
