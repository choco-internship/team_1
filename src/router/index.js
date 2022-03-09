import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/myorders",
    name: "MyOrders",
    component: () => import("@/views/MyOrders.vue"),
  },
  {
    path: "/rakhmet",
    name: "Rakhmet",
    component: () => import("@/views/Rakhmet.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("@/views/404.vue"),
    meta: {
      layout: "HiddenLayout",
    },
  },
  {
    path: "/registration",
    component: () => import("@/views/Registration.vue"),
    meta: {
      layout: "HiddenLayout",
    },
  },
  {
    name: "restaurant",
    path: "/restaurant/:id",
    component: () => import("@/views/Restaurant/RestaurantPage.vue"),
    props: {
      selectedCategorie: 0,
    },
    meta: {
      layout: "HiddenLayout",
    },
  },
  {
    path: "/menu/:id",
    component: () => import("@/views/Restaurant/CategoriesListPage.vue"),
    meta: {
      layout: "HiddenLayout",
    },
  },
  {
    path: "/cart",
    component: () => import("@/components/Cart.vue"),
    meta: {
      layout: "HiddenLayout",
    },
  },
  {
    path: "/order-detail/:id",
    component: () => import("@/views/MyOrderDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
