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
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-bind:class="{ logoToggle: menuActive }"
            v-on:click="menuActive = false"
          >
            <circle
              cx="32"
              cy="32"
              r="31"
              stroke="#09131E"
              stroke-width="0"
            />
            <path d="M25.5902 31.4416C28.7785 30.538 28.8782 26.4719 28.7287 25.1165C29.9473 25.1165 30.4066 26.4249 30.3771 27.6432L30.3727 27.8273C30.273 28.8814 29.7251 32.2046 26.1382 33.2487C22.5513 34.2928 20.2597 31.0902 19.911 29.283C19.2135 26.2711 20.5088 19.6449 30.273 18.3397C31.4687 18.2895 34.657 18.1891 36.1017 18.4401C37.5464 18.6911 39.1904 19.0425 40.6351 19.0927C42.0799 19.1429 43.2257 19.2935 44.8198 19.1429C45.9656 18.9923 47.51 18.4401 47.7093 18.2393C48.0082 18.0887 48.3071 18.1891 48.1576 18.5907C48.0082 18.9923 46.5136 20.7493 45.4675 21.5022C44.1224 22.1548 42.9268 22.5564 41.9802 22.707C40.9839 22.707 38.8417 22.6066 37.8952 22.5564C37.0981 23.3094 35.3445 25.8896 34.7068 30.1866C33.9596 35.4574 33.3618 39.8749 32.8636 41.0295C32.0167 43.3888 31.5185 46.4007 26.5865 48.8103C25.2713 49.1315 23.448 48.9441 22.7008 48.8103C21.8538 48.5426 20.0803 47.5352 19.7615 45.6478C19.6818 43.9209 20.3261 42.8868 20.6582 42.5857C21.0236 42.3179 21.9734 41.8728 22.8502 42.2343C23.7669 42.7162 23.9296 43.5729 23.8964 43.941C23.9462 44.4095 23.6971 45.3667 22.3022 45.447C21.7443 45.2863 21.5383 45.5808 21.5051 45.7482C21.7044 46.2501 22.7705 47.1638 25.4407 46.8023C27.1843 45.5976 28.8782 43.3888 30.0738 36.4614C30.552 33.1282 31.0701 31.0232 31.2694 30.3874C32.9632 25.1165 35.4541 22.6568 35.9523 22.1548C33.8599 21.9038 32.7805 21.9206 31.2694 21.9038C29.1771 22.0544 24.1953 22.1548 22.2524 26.1707C20.9771 29.3834 22.5913 31.1231 23.5975 31.4918C24.1455 31.6926 24.7931 31.6424 25.5902 31.4416Z" />
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
    filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 1));
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
  // -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  // clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
.navigation {
  z-index: 2;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  border-top: 5px solid $accent;
  .logo {
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;

    @media only screen and (min-width: 1920px) {
      width: 140px;
      height: 140px;
    }
    svg {
      width: 60px;
      align-self: center;
      &:hover {
        filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.23));
        circle {
          @media only screen and (min-width: 1366px) {
            fill: $accent-secondary;
            transition: all 0.2s linear;
          }
        }
      }
      &:focus {
        circle {
          fill: $accent;
        }
      }
      circle {
        fill: $accent;
        transition: 0.2 ease;
        transition: all 0.2s linear;
        transition-delay: 0.3s;
      }
      path {
        fill: $secondary;
        transition: all 0.2s linear;
        transition-delay: 0.3s;
      }
    }
    .logoToggle {
      circle {
        fill: $secondary;
        transition: all 0.2s linear;
      }
      path {
        fill: $accent;
        transition: all 0.2s linear;
      }
    }
  }
  .menu-btn {
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    @media only screen and (min-width: 1920px) {
      width: 140px;
      height: 140px;
    }
    .burger {
      width: 35px;
      align-self: center;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      transition: 0.2s linear;
      &:hover {
        .bar {
          background-color: $accent-secondary;
          transition: 0.2s linear;
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
