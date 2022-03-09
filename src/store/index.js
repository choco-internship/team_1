import { createStore } from "vuex";
import api from "@/services/api";

const initCart = JSON.parse(localStorage.getItem("cart")) || [];

const store = createStore({
  state() {
    return {
      restaurants: [],
      restaurant: {},
      cart: initCart,
      orders: [],
      isAuthenticated: false,
      isModalOpen: false,
      isLoading: false,
    };
  },
  mutations: {
    SET_RESTAURANTS(state, payload) {
      state.restaurants = payload;
    },
    SET_RESTAURANT(state, payload) {
      state.restaurant = payload;
    },
    // INITIALISE_CART(state) {
    //   if (localStorage.getItem("cart")) {
    //     this.replaceState(
    //       Object.assign(state.cart, JSON.parse(localStorage.getItem("cart")))
    //     );
    //   }
    // },
    ADD_TO_CART(state, product) {
      let cartItem = state.cart.find((p) => {
        return (
          p.product_id == product.product_id &&
          p.restaurant_id == product.restaurant_id
        );
      });
      if (cartItem) {
        cartItem.amount += 1;
        return;
      }
      state.cart.push({ ...product, amount: 1 });
    },
    REMOVE_FROM_CART(state, product) {
      let cartItem = state.cart.find((p) => {
        return (
          p.product_id == product.product_id &&
          p.restaurant_id == product.restaurant_id
        );
      });
      if (cartItem && cartItem.amount > 1) {
        cartItem.amount -= 1;
        return;
      }
      state.cart = state.cart.filter((item) => item != cartItem);
    },
    EMPTY_CART(state) {
      state.cart = [];
    },
    SET_ORDERS(state, payload) {
      state.orders = payload;
    },
    SET_IS_AUTHENTICATED(state, payload) {
      state.isAuthenticated = payload;
    },
    SET_IS_MODAL_OPEN(state, payload) {
      state.isModalOpen = payload;
    },
    SET_IS_LOADING(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    async fetchRestaurants({ commit }) {
      try {
        const restaurants = await api.restaurants.getRestaurants();
        commit("SET_RESTAURANTS", restaurants);
      } catch (error) {
        console.log("ERROR", error);
      }
    },
    async fetchRestaurant({ commit }, id) {
      try {
        const { data } = await api.restaurants.getRestaurant(id);
        commit("SET_RESTAURANT", data);
      } catch (error) {
        console.log("ERROR", error);
      }
    },
    addProductToCart({ commit }, product) {
      commit("ADD_TO_CART", product);
    },
    removeProductFromCart({ commit }, product) {
      commit("REMOVE_FROM_CART", product);
    },
    emptyCart({ commit }) {
      commit("EMPTY_CART");
    },
    async FETCH_ORDERS({ commit }) {
      commit("SET_IS_LOADING", true);
      try {
        const { data } = await api.orders.getOrders();
        commit("SET_ORDERS", data);
        commit("SET_IS_LOADING", false);
      } catch (error) {
        console.log("ERROR", error);
      } finally {
        commit("SET_IS_LOADING", false);
      }
    },
  },
  getters: {
    GET_RESTAURANTS: (state) => state.restaurants,
    GET_RESTAURANT: (state) => state.restaurant,
    GET_CART: (state) => state.cart,
    GET_TOTAL_PRICE: (state) =>
      state.cart.reduce(function (prev, cur) {
        return prev + cur.price * cur.amount;
      }, 0),
    GET_TOTAL_AMOUNT: (state) =>
      state.cart.reduce(function (prev, cur) {
        return prev + cur.amount;
      }, 0),
    GET_ORDERS: (state) => state.orders,
    GET_IS_AUTHENTICATED: (state) => state.isAuthenticated,
    GET_IS_MODAL_OPEN: (state) => state.isModalOpen,
    GET_IS_LOADING: (state) => state.isLoading,
  },
});

store.subscribe((mutation, state) => {
  localStorage.setItem("cart", JSON.stringify(state.cart));
});

export default store;
