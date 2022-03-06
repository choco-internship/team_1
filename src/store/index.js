import { createStore } from "vuex";
import api from "@/services/api";

export default createStore({
  state() {
    return {
      restaurants: [],
      restaurant: {},
      orders: {},
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
    async FETCH_ORDERS({ commit }, id) {
      commit("SET_IS_LOADING", true);
      try {
        const { data } = await api.orders.getOrder(id);
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
    GET_ORDERS: (state) => state.orders,
    GET_IS_AUTHENTICATED: (state) => state.isAuthenticated,
    GET_IS_MODAL_OPEN: (state) => state.isModalOpen,
    GET_IS_LOADING: (state) => state.isLoading,
  },
});
