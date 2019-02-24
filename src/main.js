import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
var VueScrollTo = require("vue-scrollto");
import AOS from "aos";
import "aos/dist/aos.css";
Vue.config.productionTip = false;

Vue.use(VueScrollTo);

// You can also pass in the default options
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
