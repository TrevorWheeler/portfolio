<template>
  <div class="login-page">
    <form>
      <input
        type="text"
        v-model="username"
      />
      <input
        type="password"
        v-model="password"
      />
      <a v-on:click="login">Login</a>
    </form>
  </div>
</template>

<script>
import axios from "axios";
const url = "http://localhost:8081/api";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      error: false
    };
  },

  computed: {
    items() {
      return this.$store.getters.loadedProjects;
    }
  },

  methods: {
    func() {
      this.$store.commit("loadProjects");
    },
    login() {
      axios
        .post(url + "/auth/signin", {
          username: this.username,
          password: this.password
        })
        .then(request => this.loginSuccessful(request))
        .catch(() => this.loginFailed());
    },
    loginSuccessful(req) {
      if (!req.data.token) {
        this.loginFailed();
        return;
      }
      this.$store.commit("setUser", req.data.username);
      this.$store.commit("setToken", req.data.token);
      localStorage.token = req.data.token;
      console.log(req.data);
      this.error = false;
      this.$router.push(this.$route.query.push || "/");
    },
    loginFailed() {
      this.error = "Login failed!";
      delete localStorage.token;
    }
  }
};
</script>

<style lang="scss">
.login-page {
  padding: 500px 0;
}
</style>

