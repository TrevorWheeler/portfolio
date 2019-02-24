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
  background-color: $primary;
  @font-face {
    font-family: "natrixSans";
    src: url("./assets/font/NatrixSans-Bold.woff2") format("woff2"),
      url("./assets/font/NatrixSans-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: "natrixSans";
    src: url("./assets/font/NatrixSans-Medium.woff2") format("woff2"),
      url("./assets/font/NatrixSans-Medium.woff") format("woff");
    font-weight: medium;
    font-style: normal;
  }
  @font-face {
    font-family: "natrixSans";
    src: url("./assets/font/NatrixSans-Medium.woff2") format("woff2"),
      url("./assets/font/NatrixSans-Medium.woff") format("woff");
    font-weight: medium;
    font-style: normal;
  }
  @font-face {
    font-family: "natrixSans";
    src: url("./assets/font/NatrixSans-Regular.woff2") format("woff2"),
      url("./assets/font/NatrixSans-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "natrixSans";
    src: url("./assets/font/NatrixSans-Light.woff2") format("woff2"),
      url("./assets/font/NatrixSans-Light.woff") format("woff");
    font-weight: normal;
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

// Route Navigation Transition
.main-enter-active {
  transition: all 1s ease;
}
.main-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.main-enter,
.main-leave-to {
  // opacity: 0;
}
</style>
