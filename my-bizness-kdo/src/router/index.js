import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import store from "../store/index.js";
import apiUser from '../services/axios/user';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: {
      middleware: "guest",
      title: `ResetPassword`,
    },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      middleware: "auth",
    },
  },
  {
    path: "/order",
    name: "Order",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Order.vue"),
    meta: {
      middleware: "auth",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.meta.middleware == "guest") {
      if (store.getters.authenticated) {
          next({ name: "Home" });
      }
      next();
  } else {
      if (store.getters.authenticated) {
          next();
      } else if(localStorage.getItem('token')){
          apiUser.Auth().then((res) => {
              if(res.data) {
                  store.commit("SET_AUTHENTICATED", true);
                  next();
              }
          }).catch((err) => {
              console.log(err.toString())
              next({ name: "Login" });
          });
      } else {
          next({ name: "Login" });
      }
  }
});

export default router;
