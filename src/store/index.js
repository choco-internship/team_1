import { createStore } from "vuex";
import api from "../services/api";

export default createStore({
  state() {
    return {
      restaurants: [],
      restaurant: {},
    };
  },
  mutations: {
    SET_RESTAURANTS(state, payload) {
      state.restaurants = payload;
    },
    SET_RESTAURANT(state, payload) {
      state.restaurant = payload;
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
  },
  getters: {
    GET_RESTAURANTS: (state) => state.restaurants,
    GET_RESTAURANT: (state) => state.restaurant,
  },
});
