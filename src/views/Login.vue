<template>
  <div class="login-page">
    <form>
      <input
        type="text"
        v-model="username"
        placeholder="Username"
      />

      <input
        type="password"
        v-model="password"
        placeholder="Password"
      />
      <a
        class="form--login--button"
        v-on:click="login"
      ><span>GO</span></a>
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
      this.$router.push(this.$route.query.push || "/dashboard");
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: $secondary;

  form {
    align-self: center;
    h1 {
      color: $primary;
    }
    label {
      color: $primary;
      font-size: 14px;

      display: block;
    }
    ::placeholder {
      align-self: center;
      font-size: 18px;
      font-weight: 600;
      letter-spacing: 1px;
      color: 54;
      color: $secondary;
    }
    input {
      text-align: center;
      height: 62px;
      display: block;
      border: 1px solid $accent;
      background-color: $accent;
      border-radius: 3px;
      width: 200px;

      &:nth-child(2) {
        margin: 1em 0;
      }
    }
    .form--login--button {
      border-radius: 3px;
      background-color: $accent;
      color: $secondary;
      display: flex;
      width: 66px;
      float: right;
      height: 62px;
      // margin: 1em 0 0 0;
      cursor: pointer;
      justify-content: center;
      transition: 0.3s linear !important;
      // @media only screen and (min-width: 768px) {
      //   // margin: 1em;
      // }

      span {
        align-self: center;
        font-size: 18px;
        font-weight: 600;
        padding: 0 1em;
      }
    }
  }
}
</style>
