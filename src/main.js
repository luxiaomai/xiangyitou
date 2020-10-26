import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "@/api";
import "./public/rem";
import "./public/vant";
import "./assets/css/reset.scss";
import "vant/lib/index.css";

Vue.config.productionTip = false;
Vue.prototype.$api = api;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
