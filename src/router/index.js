import Vue from "vue";
import VueRouter from "vue-router";
import MarvelPage from "../views/MarvelPage.vue";
import DcPage from "../views/DcPage.vue";
import SearchPage from "../views/SearchPage.vue";
import LoginPage from "../views/LoginPage.vue";
import Dashboard from "../views/Dashboard.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/",
    component: Dashboard,
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      const isAuthenticated = store.state.logged;

      if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
          if (from.path === "/login") {
            return false;
          } else {
            next({
              path: "/login",
            });
          }
        } else {
          next();
        }
      } else {
        next(); // make sure to always call next()!
      }
    },
    children: [
      {
        path: "/marvel",
        component: MarvelPage,
      },
      {
        path: "/dc",
        component: DcPage,
      },
      {
        path: "/search",
        component: SearchPage,
      },
    ],
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
