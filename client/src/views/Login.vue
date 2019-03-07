<template>
  <div class="login-page">
    <form @submit.prevent="login()">
      <fieldset>
        <input
          type="text"
          v-model="username"
          placeholder="username"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'username'"
        />

        <input
          type="password"
          v-model="password"
          placeholder="password"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'password'"
        />
        <button
          class="form--submit--button"
          type="submit"
          v-on:click='event = true'
        >
          GO</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import axios from "axios";
const url = "https://178.128.106.101:8082/api";
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
      console.log(req.data);

      this.$store.commit("setUser", req.data.username);
      this.$store.commit("setToken", req.data.token);
      this.$store.commit("setUserId", req.data.id);
      console.log(req.data);
      this.error = false;
      this.$router.push("/dashboard");
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
    width: 200px;
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
      font-size: 1.6em;
      font-weight: bold;
      margin: 0;
      &:focus {
        border: none;
      }
      &:nth-child(2) {
        margin: 1em 0;
      }
    }
    .form--submit--button {
      float: right;
    }
  }
}
</style>
