import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Cart from "../views/Cart.vue";
import NotFound from "../views/notFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    { path: "/:pathMatch(.*)*", component: NotFound },
  ],
});

export default router;
