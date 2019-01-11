<template>
  <div id="app">
    <Navigation />
    <transition
      name="main"
      mode="out-in"
    >
      <router-view :key="$route.params.id"/>
    </transition>
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
