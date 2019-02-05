<template>
  <div class="menu">
    <div class="navigation">
      <router-link
        to="/"
        tag="a"
        routerLinkActiveOptions="{ exact: true }"
        class="brand"
      >
        <div class="logo">

          <svg
            v-bind:class="{ logoToggle: menuActive }"
            v-on:click="menuActive = false"
            viewBox="0 0 68 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.1467 21.7837H5C2.23858 21.7837 0 24.0223 0 26.7837V49.0858L0.000299047 61.9997L13.109 61.9784C15.8647 61.9739 18.0973 59.7406 18.1009 56.9849L18.1467 21.7837Z" />
            <path d="M0 5C0 2.23858 2.23858 0 5 0H67.1664V11.1282C67.1664 13.8897 64.9278 16.1282 62.1664 16.1282H0V5Z" />
            <path d="M42.6467 21.8L29.4919 21.8214C26.7336 21.8259 24.5 24.0631 24.5 26.8214L24.5 62.0159H37.6467C40.4081 62.0159 42.6467 59.7773 42.6467 57.0159V41.9079V21.8Z" />
            <path d="M48.5665 26.708C48.5665 23.9435 50.8099 21.7036 53.5744 21.708L67.1664 21.7296V56.9999C67.1664 59.7613 64.9278 61.9999 62.1664 61.9999H48.5665V26.708Z" />
          </svg>

        </div>
      </router-link>
      <a
        v-on:click="menuActive = !menuActive"
        class="menu-btn"
      >
        <div
          class="burger"
          v-bind:class="{ burgerToggle: menuActive }"
        >
          <div class="bar first">
          </div>
          <div class="bar second">
          </div>
          <div class="bar third">
          </div>
        </div>
      </a>
    </div>
    <div
      class="overlay"
      v-bind:class="{ overlayActive: menuActive }"
    >
      <div class="container">
        <div class="content">
          <h2>About</h2>
          <router-link
            :to="{ name: 'home' }"
            tag="a"
            class="item"
          >
            <span v-on:click="menuActive = false">

              Home</span></router-link>
        </div>
        <div class="content">
          <h2>Work</h2>
          <router-link
            :to="{ name: 'selected', params: { id: work.route } }"
            tag="a"
            class="item"
            v-for="(work, index) in works"
            :key="index"
          >
            <span v-on:click="selectedWork(index); menuActive = false">
              {{work.title}}
            </span>

          </router-link>
          <a
            href="https://github.com/trevorwheeler"
            target="_blank"
          >
            <span>Github</span>
          </a>
        </div>
        <div class="content">
          <h2>contact</h2>
          <a
            href="mailto:sendtrevmail@gmail.com"
            target="_blank"
          >
            <span>Contact</span>
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      menuActive: false
    };
  },
  components: {},
  computed: {
    works() {
      return this.$store.state.works;
    }
  },
  methods: {
    selectedWork(index) {
      this.$store.commit("selected", index);
    }
  }
};
</script>
<style scoped lang="scss">
.menu {
  position: fixed;
  top: 0;
  z-index: 2;
}
.overlay {
  z-index: 1;
  position: fixed;
  width: 100vw;
  height: 100vh;
  clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
  background-color: $accent;
  transform: translateY(-100vh);

  transition: all 0.4s linear;
  display: flex;
  justify-content: center;
  .container {
    align-self: center;
    width: 65%;
    margin-bottom: 10%;
    @media only screen and (min-width: 700px) {
      display: flex;
      justify-content: space-between;
    }
    @media only screen and (min-width: 1920px) {
      width: 1300px;
    }
  }
  .content {
    margin: 0 0 50px 0;
    &:nth-child(3) {
      margin: 0;
    }
    h2 {
      font-size: 16px;
      text-transform: uppercase;
      margin: 0 0 20px 0;
      letter-spacing: 2px;
      color: $secondary;
      font-weight: 900;
    }
    a {
      font-size: 20px;
      color: $secondary;
      display: block;
      margin: 15px 0;
      font-weight: 600;
      text-decoration: underline;
      transition: 0.2s ease;
    }
  }
}
.overlayActive {
  transform: translateY(0);
  height: 110%;
  transition: all 0.4s ease-in-out;
}
.navigation {
  z-index: 2;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  .logo {
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    @media only screen and (min-width: 1366px) {
      width: 100px;
      height: 100px;
    }
    @media only screen and (min-width: 1920px) {
      width: 140px;
      height: 140px;
    }
    svg {
      width: 50px;
      align-self: center;
      fill: $accent;
      transition: 0.2 ease;
      transition: all 0.2s linear;
      transition-delay: 0.3s;
      @media only screen and (min-width: 1366px) {
        fill: $secondary;
        width: 67px;
      }
      &:hover {
        filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.23));
        path {
          @media only screen and (min-width: 1366px) {
            fill: $accent-secondary;
            transition: all 0.2s linear;
          }
        }
      }
      &:focus {
        path {
          fill: $accent;
        }
      }
    }
    .logoToggle {
      path {
        fill: $secondary;
        transition: all 0.2s linear;
      }
    }
  }
  .menu-btn {
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    @media only screen and (min-width: 1366px) {
      width: 100px;
      height: 100px;
    }
    @media only screen and (min-width: 1920px) {
      width: 140px;
      height: 140px;
    }
    .burger {
      width: 35px;
      @media only screen and (min-width: 1366px) {
        width: 50px;
      }
      align-self: center;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      transition: 0.2s linear;
      &:hover {
        .bar {
          transition: all 0.3s linear;
        }
        .third {
          width: 100%;
        }
      }
      .bar {
        width: 100%;
        height: 4px;
        border-radius: 2px;
        background-color: $accent;
        margin-bottom: 5px;
        transition: all 0.3s linear;
        transition-delay: 0.3s;
        @media only screen and (min-width: 1366px) {
          margin-bottom: 10px;
          height: 6px;
        }
      }
      .third {
        width: 70%;
        float: right;
        margin: 0;
      }
    }
    .burgerToggle {
      margin-top: 15px;
      transition: all 0.3s ease-in-out;
      .bar {
        background-color: $secondary;
        transition: all 0.3s ease-in-out;
        &:nth-child(1) {
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          transform: rotate(-45deg) translateY(-6px) translateX(7px);
          @media only screen and (min-width: 1366px) {
            transform: rotate(-45deg) translateY(-10px) translateX(12px);
          }
        }
        &:nth-child(3) {
          opacity: 0;
          background-color: $accent;
        }
      }
    }
  }
}
.active {
  text-decoration: none !important;
  transition: 0.2s ease;
}
.active span {
  text-decoration: line-through;
  color: $accent-secondary;
}
</style>
