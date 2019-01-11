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
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-bind:class="{ logoToggle: menuActive }"
            v-on:click="menuActive = false"
          >
            <circle
              cx="25"
              cy="25"
              r="25"
            />
            <path
              d="M16.6364 19.8564H16.4062C15.2684 19.8564 14.3799 20.1463 13.7407 20.7262C13.1142 21.2932 12.801 22.3047 12.801 23.7608C12.801 24.2376 12.8458 24.5726 12.9352 24.7659C13.0247 24.9463 13.0695 25.0494 13.0695 25.0752C12.3791 25.0752 11.8614 24.9335 11.5162 24.65C11.1838 24.3536 11.0176 23.8704 11.0176 23.2003C11.0176 22.2854 11.2413 21.4543 11.6888 20.7069C12.1362 19.9466 12.8458 19.3345 13.8174 18.8706C14.8018 18.4068 16.0483 18.1748 17.5568 18.1748C18.4006 18.1748 19.3083 18.2521 20.2799 18.4067C21.0981 18.5485 21.8118 18.668 22.451 18.668C23.3102 18.6718 23.8185 18.668 24.5808 18.4438C24.5552 19.2814 23.6544 18.8066 23.2581 19.2061C22.8617 19.6055 22.917 20.0131 22.1371 20.0131C21.728 20.0131 21.4753 20.636 21.0662 20.5716C20.6571 20.5071 20.0754 20.3976 19.3211 20.243L16.6895 32.5226H13.9544L16.6364 19.8564Z"
              fill="#19023E"
            />
            <path
              d="M24.4093 19.4319C23.5206 19.7699 22.8321 20.2957 22.3438 21.0092C21.8556 21.7102 21.6115 22.574 21.6115 23.6005C21.6115 24.0637 21.6553 24.3891 21.743 24.5769C21.8306 24.7522 21.8744 24.8523 21.8744 24.8773C21.1984 24.8773 20.6914 24.7396 20.3534 24.4642C20.028 24.1763 19.8652 23.7069 19.8652 23.0559C19.8652 22.2548 20.1907 21.4786 20.8417 20.7275C21.5051 19.9639 22.3501 19.3505 23.3766 18.8874C24.4031 18.4117 25.4296 18.1738 26.4561 18.1738C26.6313 18.1738 26.8817 18.1863 27.2072 18.2114L27.3762 29.7594L31.3516 18.1738L33.7055 18.1738L33.8731 29.7594L37.8753 18.1738H39.1308L33.8176 32.5217H31.1722L30.9814 22.6992L27.3162 32.5217H24.7381L24.4093 19.4319Z"
              fill="#19023E"
            />
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
            class="item">
             <span v-on:click="menuActive = false">
       
          Home</span></router-link>
        </div>
        <div class="content">
          <h2>Work</h2>
          <!-- <a>The Caf</a>
          <a>Sandy Pages Books</a> -->
          <router-link
            :to="{ name: 'work', params: { id: work.route } }"
            tag="a"
            class="item"
            v-for="(work, index) in works"
            :key="index"
       
          >
              <span v-on:click="selectedWork(index); menuActive = false">
              {{work.title}}
              </span>

          </router-link>
          <a>Github</a>
        </div>

        <div class="content">
          <h2>contact</h2>
          <a>Let's talk</a>
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
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 56%, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 56%, 0% 100%);
  background-color: $accent;
  transform: translateY(-100vh);
  transition: all 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  .container {
    align-self: center;
    width: 65%;
    @media only screen and (min-width: 700px) {
      display: flex;
      justify-content: space-between;
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
  transition: all 0.5s ease-in-out;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
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
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    svg {
      align-self: center;
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
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    .burger {
      width: 35px;
      align-self: center;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
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
