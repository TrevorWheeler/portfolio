<template>
  <header>
    <div class="navigation">
      <router-link
        to="/"
        tag="div"
        routerLinkActiveOptions="{ exact: true }"
        class="brand"
      >
        <svg
          v-bind:class="{ logoToggle: menuActive }"
          v-on:click="$store.commit('menuStateFalse')"
          viewBox="0 0 71 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.1467 21.7837H5C2.23858 21.7837 0 24.0223 0 26.7837V49.0858L0.000299047 61.9997L13.109 61.9784C15.8647 61.9739 18.0973 59.7406 18.1009 56.9849L18.1467 21.7837Z"
            fill="#EF476F"
          />
          <path
            d="M24.5101 26.792C24.5101 24.0274 26.7536 21.7875 29.5182 21.792L37.6649 21.8052C40.4232 21.8097 42.6568 24.047 42.6568 26.8052V61.9997H24.5101V26.792Z"
            fill="#EF476F"
          />
          <path
            d="M42.6568 21.7838L29.502 21.8052C26.7437 21.8097 24.5101 24.047 24.5101 26.8052V61.9997H42.6568V41.8918V21.7838Z"
            fill="#EF476F"
          />
          <path
            d="M0 5C0 2.23858 2.23858 0 5 0H67.1664V11.1282C67.1664 13.8897 64.9278 16.1282 62.1664 16.1282H0V5Z"
            fill="#EF476F"
          />
          <path
            d="M48.5664 26.708C48.5664 23.9435 50.8098 21.7036 53.5743 21.708L67.1663 21.7296V56.9999C67.1663 59.7613 64.9278 61.9999 62.1663 61.9999H48.5664V26.708Z"
            fill="#EF476F"
          />
          <path
            class="front"
            d="M21.1467 21.7837H8C5.23858 21.7837 3 24.0223 3 26.7837V49.0858L3.0003 61.9997L16.109 61.9784C18.8647 61.9739 21.0973 59.7406 21.1009 56.9849L21.1467 21.7837Z"
            fill="#09131E"
          />
          <path
            class="front"
            d="M27.5101 26.792C27.5101 24.0274 29.7536 21.7875 32.5182 21.792L40.6649 21.8052C43.4232 21.8097 45.6568 24.047 45.6568 26.8052V61.9997H27.5101V26.792Z"
            fill="#09131E"
          />
          <path
            class="front"
            d="M45.6568 21.7838L32.502 21.8052C29.7437 21.8097 27.5101 24.047 27.5101 26.8052V61.9997H45.6568V41.8918V21.7838Z"
            fill="#09131E"
          />
          <path
            class="front"
            d="M3 5C3 2.23858 5.23858 0 8 0H70.1664V11.1282C70.1664 13.8897 67.9278 16.1282 65.1664 16.1282H3V5Z"
            fill="#09131E"
          />
          <path
            class="front"
            d="M51.5664 26.708C51.5664 23.9435 53.8098 21.7036 56.5743 21.708L70.1663 21.7296V56.9999C70.1663 59.7613 67.9278 61.9999 65.1663 61.9999H51.5664V26.708Z"
            fill="#09131E"
          />
        </svg>
      </router-link>

      <!-- <div
        class="menu"
        v-on:click="menuActive = !menuActive"
        v-bind:class="{ toggle: menuActive }"
      > -->
          <div
        class="menu"
        v-on:click="$store.commit('menuState')"
        v-bind:class="{ toggle: menuActive }"
      >

        <svg
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            class="dot"
            cx="31"
            cy="31"
            r="3"
          />
          <circle
            class="dot"
            cx="42"
            cy="31"
            r="3"
          />
          <circle
            class="dot"
            cx="20"
            cy="31"
            r="3"
          />
          <circle
            class="dot-front"
            cx="31"
            cy="31"
            r="3"
          />
          <circle
            class="dot-front"
            cx="42"
            cy="31"
            r="3"
          />
          <circle
            class="dot-front"
            cx="20"
            cy="31"
            r="3"
          />
          <circle
            class="circle"
            cx="31"
            cy="31"
            r="30"
            stroke-width="2"
          />
          <rect
            class="cross"
            x="21"
            y="23.1213"
            width="3"
            height="25"
            transform="rotate(-45 21 23.1213)"
          />
          <rect
            class="cross"
            x="38.6777"
            y="21"
            width="3"
            height="25"
            transform="rotate(45 38.6777 21)"
          />
        </svg>
      </div>
    </div>
    <div
      class="overlay"
      v-bind:class="{ overlayActive: menuActive }"
    >
      <div class="container">
        <div class="content-container">
          <div class="content">
            <h2>About</h2>
            <router-link
              :to="{ name: 'home' }"
              tag="a"
              class="item"
            >
              <span v-on:click="$store.commit('menuStateFalse')">

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
              <span v-on:click="selectedWork(index); $store.commit('menuStateFalse')">
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
  </header>

</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      // menuActive: false
    };
  },
  components: {},
  computed: {
    works() {
      return this.$store.state.works;
    },
    menuActive() {
      return this.$store.state.menuActive;
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
.overlay {
  z-index: 1;
  position: fixed;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  transform: translateY(-105vh);
  transition: all 0.4s linear;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.75);
  .container {
    width: 100%;
    height: 100%;
    background-color: $accent-third;
    display: flex;
    justify-content: center;
    .content-container {
      padding: 20vh 0;
      height: 100vh;
      width: 60vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media only screen and (min-width: 520px) {
        padding: 0;
        height: 150px;
        align-self: center;
        flex-direction: initial;
        width: 80%;
      }
      @media only screen and (min-width: 1920px) {
        width: 1300px;
      }
    }
  }
  .content {
    margin: 0 0 50px 0;
    &:nth-child(3) {
      margin: 0;
    }
    h2 {
      font-size: 1.8em;
      text-transform: uppercase;
      margin: 0 0 20px 0;
      letter-spacing: 2px;
      color: $secondary;
      font-weight: 900;
    }
    a {
      font-size: 2em;
      text-transform: initial;
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

  transition: all 0.4s linear;
}

.brand {
  align-self: center;
  width: 50px;
  cursor: pointer;
  @media only screen and (min-width: 1366px) {
    width: 70px;
  }
  svg {
    &:hover {
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.75));
    }
    .front {
      fill: $accent;
      @media only screen and (min-width: 1366px) {
        fill: $secondary;
      }
    }
  }
}

.menu {
  align-self: center;
  width: 50px;
  cursor: pointer;
  @media only screen and (min-width: 1700px) {
    width: 60px;
  }
  svg {
    transition: all 0.2s ease-in-out;
    &:hover {
      transition: all 0.2s ease-in-out;
      .dot-front {
        fill: $accent-third;
        transition: all 0.2s ease-in-out;
        opacity: 1;
      }
      .cross {
        fill: $secondary;
        transition: opacity 0.4s ease-in-out;
      }
    }
  }
  .dot {
    fill: $accent-secondary;

    transition: all 0.4s ease-in-out;
  }
  .dot-front {
    fill: $accent-third;
    opacity: 0;
    transition: all 0.4s ease-in-out;
  }
  .circle {
    stroke: $accent;
    transition: all 0.4s ease-in-out;
  }
  .cross {
    fill: $secondary;
    opacity: 0;
    transition: all 0.4s ease-in-out;
  }
}

.toggle {
  svg {
    .dot {
      opacity: 0;

      transition: all 0.4s ease-in-out;
    }
    .circle {
      stroke: $secondary;
      transition: all 0.4s ease-in-out;
    }
    .cross {
      fill: $accent-secondary;
      opacity: 1;
      transition: opacity 0.4s ease-in-out;
    }
  }
}
.navigation {
  z-index: 2;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  padding: 4vw 4vw 0 4vw;
  justify-content: space-between;
  @media only screen and (min-width: 1700px) {
    padding: 2vw 2vw 0 2vw;
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
