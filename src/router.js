import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "active",
  routes: [
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/",
      component: Home,
      name: "home"
    },
    {
      path: "/login",
      component: Login,
      name: "login"
    }
  ],
  scrollBehavior() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 });
      }, 500);
    });
  }
});
