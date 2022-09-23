import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FilmView from "../views/FilmView.vue";
import SearchView from "../views/SearchView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/film/:id",
      name: "film",
      component: FilmView,
    },
    {
      path: "/search",
      name:"search",
      component: SearchView,
    }
  ],
});

export default router;
