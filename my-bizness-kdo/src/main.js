import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { ipcRenderer } from "electron";
import Store from "./store/index";
import Router from "./router/index";

Vue.config.productionTip = false;

//show modal order
ipcRenderer.on("ShowMyModal", function () {
  if (Router.currentRoute.name != "Order") {
    Router.push("/order");
  }
  Store.commit("SET_DIALOG_ORDER");
});

//go to Home
ipcRenderer.on("GoToHome", function () {
  if (Router.currentRoute.name != "Home") {
    Router.push("/home");
  }
});

//go to Order
ipcRenderer.on("GoToOrder", function () {
  if (Router.currentRoute.name != "Order") {
    Router.push("/order");
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
