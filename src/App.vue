<template>
  <div id="app">
    <!-- <transition
      name="main"
   
      appear
    > -->
    <Navigation />
    <!-- </transition>
    <transition
      name="main"
      mode="out-in"
      appear
    > -->
    <router-view />
    <!-- </transition> -->
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  name: "app",
  components: {
    Navigation
  },
  data() {
    return {};
  },
  computed: {}
};
</script>

<style lang="scss">
@import "./normalize.css";
@import "./animate.css";
* {
  box-sizing: border-box;
}

body {
  font-family: "natrixSans", Helvetica, Arial, sans-serif;
  color: $secondary;
  font-size: 10px;

  @font-face {
    font-family: "natrixSans";
    src: url("./assets/font/NatrixSans-Bold.woff2") format("woff2"),
      url("./assets/font/NatrixSans-Bold.woff") format("woff");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "natrixSans";
    src: url("./assets/font/NatrixSans-Medium.woff2") format("woff2"),
      url("./assets/font/NatrixSans-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "natrixSans";
    src: url("./assets/font/NatrixSans-Regular.woff2") format("woff2"),
      url("./assets/font/NatrixSans-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "natrixSans";
    src: url("./assets/font/NatrixSans-Light.woff2") format("woff2"),
      url("./assets/font/NatrixSans-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

p {
  color: $text-dark;
  line-height: 1.6em;
  font-size: 1.8em;
  margin: 30px 0;
}

a {
  text-decoration: none;
}

body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

  background-color: #f5f5f5;
}

body::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

body::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: $accent;
}
</style>
