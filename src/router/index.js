import { createRouter, createWebHashHistory } from "vue-router";

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
    name: "restaurant",
    path: "/restaurant/:id",
    component: () => import("@/views/Restaurant/RestaurantPage.vue"),
    props: {
      selectedCategorie: 0,
    },
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
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !localStorage.getItem("access_token")) {
    next("/login");
  } else {
    next();
  }
});

export default router;
