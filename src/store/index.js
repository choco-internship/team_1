import { createStore } from "vuex";
import api from "../services/api";

export default createStore({
  state() {
    return {
      restaurants: [],
      restaurant: {},
      cart: [],
    };
  },
  mutations: {
    SET_RESTAURANTS(state, payload) {
      state.restaurants = payload;
    },
    SET_RESTAURANT(state, payload) {
      state.restaurant = payload;
    },
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
  },
  actions: {
    async FETCH_RESTAURANTS({ commit }) {
      try {
        const restaurants = await api.restaurants.getRestaurants();
        commit("SET_RESTAURANTS", restaurants);
      } catch (error) {
        console.log("ERROR", error);
      }
    },
    async FETCH_RESTAURANT({ commit }, id) {
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
  },
  getters: {
    GET_RESTAURANTS: (state) => state.restaurants,
    GET_RESTAURANT: (state) => state.restaurant,
    GET_CART: (state) => state.cart,
    GET_TOTAL_PRICE: (state) =>
      state.cart.reduce(function (prev, cur) {
        return prev + cur.price;
      }, 0),
    GET_TOTAL_AMOUNT: (state) =>
      state.cart.reduce(function (prev, cur) {
        return prev + cur.amount;
      }, 0),
  },
});
