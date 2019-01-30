import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Featured from "./views/Featured.vue";
import Selected from "./views/Selected.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      component: Home,
      name: "home"
    },

    {
      path: "/featured",
      name: "featured",
      component: Featured
    },
    {
      path: "/:id",
      name: "selected",
      component: Selected,
      props: true
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
