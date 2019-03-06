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
  background-color: $secondary;
}

body::-webkit-scrollbar {
  width: 5px;
  background-color: $secondary;
}

body::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: $accent;
  border-radius: 2px;
}

body {
  font-family: "natrixSans", Helvetica, Arial, sans-serif;
  font-size: 10px;
  background-color: $secondary;
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
  border-radius: 2px;
  color: $text-dark;
  display: flex;

  background: linear-gradient(180deg, #02c995 0%, #23a785 100%), #06d6a0;
  cursor: pointer;
  justify-content: center;
  margin: 0 auto;
  transition: 0.3s linear !important;
  &:hover {
    box-shadow: 0px 0px 0px 4px $accent inset, 0px 0px 0px 6px $secondary inset;
    // transform: scale(0.95);
  }
  &:active {
    transform: scale(0.9);
  }
  @media only screen and (min-width: 768px) {
    margin: 0 1em;
  }

  span {
    align-self: center;
    font-size: 1.8em;
    font-weight: 600;
    transition: 0.3s linear !important;
  }
}

fieldset {
  border-width: 0;
  padding: 0;
}
.form--submit--button {
  border-radius: 3px;
  background-color: $accent;
  color: $secondary;
  display: flex;
  border: 0;
  // width: 66px;
  padding: 0 1.1em;
  float: right;
  height: 62px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  justify-content: center;
  transition: 0.3s linear !important;
  &:hover {
    box-shadow: 0px 0px 0px 3px $accent inset, 0px 0px 0px 6px $secondary inset;
  }
  &:active {
    transform: scale(0.9);
  }
}
</style>
