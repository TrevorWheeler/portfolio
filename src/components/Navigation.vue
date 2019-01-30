<template>
  <header>
    <router-link
      to="/"
      routerLinkActiveOptions="{ exact: true }"
    >
     <div v-on:click="loadingfunc()">
      <h1 class="name">Trevor Wheeler</h1>
     </div>
    </router-link>
    <router-link
      to="/featured"
      routerLinkActiveOptions="{ exact: true }"
    >
    <div v-on:click="loadingfunc()">
      <h1 class="name">Work</h1>
    </div>
    </router-link>

  </header>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    //find what work was selected and commit mutation in store
    selectedWork(index) {
      this.$store.commit("selected", index);
    },
    loadingfunc() {
      this.$store.commit("loading");
    }
  }
};
</script>
<style scoped lang="scss">
header {
  position: fixed;
  z-index: 2;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10vw 0.5em;
  background-color: $primary;
  opacity: 0.8;
  @media only screen and (max-width: 320px) {
    padding: 0 15px;
  }
  @media only screen and (min-width: 1366px) {
    width: 1008px;
    left: 50%;
    padding: 0 0 0.5em 0;
    transform: translateX(-50%);
  }
  h1 {
    color: $accent;
  }
}

//active classes for navigation
.active {
  text-decoration: none !important;
  transition: 0.2s ease;
}
.active h1 {
  // text-decoration: line-through;
  color: $secondary;
}
</style>
