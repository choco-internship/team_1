import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {
      requiresAuth: true,
    },
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
    name: "Registration",
    component: () => import("@/views/Registration.vue"),
    meta: {
      layout: "HiddenLayout",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
    meta: {
      layout: "HiddenLayout",
    },
  },
  {
    path: "/restaurant/:id",
    component: () => import("@/views/Restaurant/RestaurantPage.vue"),
    meta: {
      requiresAuth: true,
      layout: "HiddenLayout",
    },
  },
  {
    path: "/menu/:id",
    component: () => import("@/views/Restaurant/CategoriesListPage.vue"),
    meta: {
      requiresAuth: true,
      layout: "HiddenLayout",
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/components/Cart.vue"),
    meta: {
      requiresAuth: true,
      layout: "HiddenLayout",
    },
  },
  {
    path: "/order-detail/:id",
    name: "OrderDetail",
    component: () => import("@/views/MyOrderDetail.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !store.getters.GET_IS_AUTHENTICATED) {
    next("/login");
  } else {
    next();
  }
});

export default router;
