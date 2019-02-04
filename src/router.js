import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// import Work from "./views/Work.vue";

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
      path: "/:id",
      name: "selected",
      // component: Work,
      props: true,
      component: () => import("./views/Work.vue")
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
