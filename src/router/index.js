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
  },
  {
    path: "/registration",
    component: () => import("@/views/Registration.vue"),
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
