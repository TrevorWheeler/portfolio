<template>
  <div id="app">
    <Navigation />
    <transition
      name="main"
      mode="out-in"
    >
      <router-view :key="$route.params.id" />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Navigation,
    Footer
  },
  computed: {}
};
</script>

<style lang="scss">
@import "./normalize.css";
* {
  box-sizing: border-box;
}
body {
  font-family: "Sarabun", sans-serif;
  color: $secondary;
  font-size: 10px;
  background-color: $primary;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1 {
  font-size: 1.8em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 55px 0 0 0;
  font-family: "Sarabun", sans-serif;
  color: $secondary;
}
h2,
h3 {
  font-size: 2.4em;
  font-weight: 700;
  margin: 0;
  letter-spacing: 2px;
  text-transform: uppercase;
}
h3 {
  margin: 0 0 30px 0;
}
p {
  font-size: 2em;
  line-height: 1.8em;
  margin: 0;
  color: $text;
}
a {
  text-decoration: none;
  color: $secondary;
}
.divider {
  width: 65px;
  height: 0.3em;
  margin: 30px 0;
  background-color: $divider;
}
.buttons {
  justify-content: space-between;
}
button:disabled {
  opacity: 0.2;
  cursor: not-allowed !important;
  box-shadow: none !important;
}
button:focus {
  outline: 0;
}
.links {
  display: flex;
  margin: 4em 0 0 0;
  a,
  button {
    display: flex;
    justify-content: center;
    width: 190px;
    height: 5em;
    border: 0;
    background-color: $accent;
    transition: 0.2s linear;
    cursor: pointer;
    &:hover {
      transition: 0.2s linear;
      box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 0.67);
    }

    &:nth-child(1) {
      margin: 0 2em 0 0;
    }
    span {
      align-self: center;
      font-size: 2em;
      color: $primary;
      transition: 0.2s linear;
    }
  }
}
// Route Navigation Transition
.main-enter-active {
  transition: all 0.4s ease;
}
.main-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.main-enter,
.main-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>
