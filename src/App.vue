<template>
  <div id="app">
    <Navigation />
    <transition
      name="main"
      mode="out-in"
    >
      <router-view :key="$route.params.id" />
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
  font-family: "Sarabun", sans-serif;
  color: $secondary;
  font-size: 10px;
  background-color: $primary;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

p {
  color: $text;
}

a {
  text-decoration: none;
}

a.btn {
  font-weight: 400;
  height: 50px;
  max-width: 350px;
  display: block;
  background-color: $secondary;
  color: $primary;
  display: flex;
  justify-content: center;
  transition: 0.2s ease-in-out;
  border-radius: 3px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  &:hover {
    background-color: $accent;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);
    transform: translateY(-1px);
    span {
      color: $secondary;
    }
  }
  span {
    align-self: center;
    font-size: 20px;
    transition: 0.2s ease-in-out;
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
