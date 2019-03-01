<template>
  <div id="app">
    <Navigation />
    <router-view />
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
@font-face {
  font-family: "natrixSans";
  src: url("./assets/font/NatrixSans-Bold.woff2") format("eot"),
    url("./assets/font/NatrixSans-Bold.woff2") format("woff2"),
    url("./assets/font/NatrixSans-Bold.woff") format("woff");
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: "natrixSans";
  src: url("./assets/font/NatrixSans-Medium.woff2") format("eot"),
    url("./assets/font/NatrixSans-Medium.woff2") format("woff2"),
    url("./assets/font/NatrixSans-Medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "natrixSans";
  src: url("./assets/font/NatrixSans-Regular.woff2") format("eot"),
    url("./assets/font/NatrixSans-Regular.woff2") format("woff2"),
    url("./assets/font/NatrixSans-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "natrixSans";
  src: url("./assets/font/NatrixSans-Light.woff2") format("eot"),
    url("./assets/font/NatrixSans-Light.woff2") format("woff2"),
    url("./assets/font/NatrixSans-Light.woff") format("woff");
  font-weight: 300;
  font-style: normal;
}
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

  background-color: #f5f5f5;
}

body::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

body::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: $accent;
}

body {
  font-family: "natrixSans", Helvetica, Arial, sans-serif;
  color: $secondary;
  font-size: 10px;
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

.link {
  width: 220px;
  height: 62px;
  border-radius: 3px;
  color: $secondary;
  display: flex;
  background-color: $accent;
  cursor: pointer;
  justify-content: center;
  margin: 0 auto;
  transition: 0.3s linear !important;
  @media only screen and (min-width: 768px) {
    margin: 1em;
  }

  span {
    align-self: center;
    font-size: 16px;
    font-weight: 500;
    // letter-spacing: 1px;
  }
}
</style>
