<template>
  <div class="login-page">
        <div class="project-category-container">
            <h3>Please Login</h3>
      </div>
    <form>
      <label>Username:</label>
      <input
        type="text"
        v-model="username"
      />
            <label>Password:</label>
      <input
        type="password"
        v-model="password"
      />
      <a class="form--login--button" v-on:click="login"><span>Login</span></a>
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
 height:100vh;
display:flex;
flex-direction: column;
justify-content:center;
.project-category-container {
      display: flex;
      justify-content: center;
      // margin: 0 0 20px 0;
 
   
      h3 {
        padding: 0 0 0.2em 0;
        font-weight: 400;
        font-size: 2.4em;
        display: inline-block;
        border-bottom: 4px solid $accent;
      }
    }
form {
  align-self:center;
  background-color:$secondary;
  padding:5em;
  label {
    color:$primary;
    font-size:14px;
    
    display:block;
  }
  input {
    height:30px;
      display:block;
      border:1px solid $accent;
      border-radius:3px;
width:200px;
    margin:0.5em 0 1em 0;

  }
  .form--login--button {
      border-radius: 3px;
      background-color:$accent;
      color: $secondary;
      display: flex;
      width:100px;
      float:right;
      height:30px;
      margin:1em 0 0 0;
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
   
        letter-spacing: 1px;
      }
    }
}
}
</style>
