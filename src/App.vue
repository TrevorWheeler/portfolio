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

h1 {
  font-size: 40px;
  text-transform: uppercase;
  margin: 0;
  @media only screen and (min-width: 375px) {
    font-size: 4.8em;
  }
  @media only screen and (min-width: 768px) {
    font-size: 48px;
  }
  // @media only screen and (min-width: 1366px) {
  //   font-size: 48px;
  // }
}

p {
  color: $text-dark;
  line-height: 1.6em;
  font-size: 1.8em;
  margin: 30px 0;
  //  @media only screen and (min-width: 768px) {
  //       font-size: 24px;
  //     }
}

a {
  text-decoration: none;
  font-size: 2em;
  text-transform: uppercase;
}

a.btn {
  font-weight: 400;
  height: 56px;
  max-width: 250px;
  background-color: $accent-secondary;
  color: $primary;
  display: flex;
  cursor: pointer;
  justify-content: center;
  transition: 0.2s ease-in-out;
  border-radius: 28px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  // box-shadow: 0px 4px 4px rgba(9, 19, 30, 0.3);

  &:hover {
    background-color: $accent-third;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.45);

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
