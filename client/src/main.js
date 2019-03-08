import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
var VueScrollTo = require("vue-scrollto");
import AOS from "aos";
import "aos/dist/aos.css";
import VueAnalytics from "vue-analytics";
// import axios from 'axios';
Vue.config.productionTip = false;
// Vue.use(axios);
Vue.use(VueAnalytics, {
  id: "UA-135906549-1"
});

Vue.use(VueScrollTo);
// VueScrollTo options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
