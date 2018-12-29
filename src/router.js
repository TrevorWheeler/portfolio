import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Featured from "./views/Featured.vue";
import Work from "./views/Work.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  routes: [
    {
      path: "/:id",
      name: "work",
      component: Work,
      props: true
    },
    {
      path: "/works",
      name: "featured",
      component: Featured
    },
    {
      path: "/",
      component: Home,
      name: "home"
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      //   import(/* webpackChunkName: "about" */ "./views/Home.vue")
    }
  ]
});
