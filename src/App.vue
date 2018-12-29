<template>
  <div id="app">
    <Navigation />
    <Icons />
    <transition
      name="main"
      mode="out-in"
    >
      <router-view />
    </transition>

  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Icons from "./components/Icons.vue";

export default {
  name: "app",
  components: {
    Navigation,
    Icons
    // Slide
  },
  data() {
    return {};
  },
  computed: {
    welcome() {
      return this.$store.state.welcome;
    }
  }
};
</script>

<style lang="scss">
@import "./normalize.css";
* {
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  color: $secondary;
  font-size: 10px;
  background-color: $primary;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p {
  font-size: 10px;
}

a {
  text-decoration: none;
  // color:$primary;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    font-size: 10px;
    border: 2px solid $secondary;
  }
}

.main-enter-active {
  transition: opacity 0.7s;
  transition: transform 0.7s;
}

.main-leave-active {
  transition: opacity 0.7s;
  transition: transform 0.7s;
}

.main-enter,
.main-leave-to {
  opacity: 1;
}
</style>
