import { createRouter, createWebHistory } from "vue-router";

const Home = import("../pages/Home/index.vue");
const Feedbacks = import("../pages/Feedbacks/index.vue");
const Credentials = import("../pages/Credentials/index.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/feedbacks",
    name: "Feedbacks",
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: "/credentials",
    name: "Credentials",
    component: Credentials,
    meta: {
      hasAuth: true
    }
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "Home" }
  }
];

const router = createRouter({
  history: createWebHistory("/"),
  routes
});

export default router;
