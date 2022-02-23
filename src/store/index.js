import { createStore } from "vuex";
import api from "../services/api";

export default createStore({
  state() {
    return {
      restaurants: [],
      orders: [],
    };
  },
  mutations: {
    SET_RESTAURANTS(state, payload) {
      state.restaurants = payload;
    },
    SET_ORDERS(state, payload) {
      state.orders = payload;
    },
  },
  actions: {
    async FETCH_RESTAURANTS({ commit }) {
      try {
        const { restaurants } = await api.restaurants.getRestaurants();
        commit("SET_RESTAURANTS", restaurants);
      } catch (error) {
        console.log("ERROR", error);
      }
    },
    async FETCH_ORDERS({ commit }) {
      try {
        const { orders } = await api.orders.getOrders();
        commit("SET_ORDERS", orders);
      } catch (error) {
        console.log("ERROR", error);
      }
    },
  },
  getters: {
    GET_RESTAURANTS: (state) => state.restaurants,
    GET_ORDERS: (state) => state.orders,
  },
});
