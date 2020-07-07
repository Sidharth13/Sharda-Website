import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/our developers",
    name: "Our Developers",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(
        /* webpackChunkName: "our developers" */ "../views/Our Developers.vue"
      );
    },
  },
  {
    path: "/deansir",
    name: "Dean Sir",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "deansir" */ "../views/Dean Sir.vue");
    },
  },
  {
    path: "/learnshala",
    name: "Learnshala",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(
        /* webpackChunkName: "learnshala" */ "../views/Learnshala.vue"
      );
    },
  },
  {
    path: "/our faculties",
    name: "Our Faculties",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(
        /* webpackChunkName: "our faculties" */ "../views/Our Faculties.vue"
      );
    },
  },
  {
    path: "/about",
    name: "About",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
