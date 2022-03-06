import axios from "axios";
import restaurants from "@/model/restaurants.model.js";
import orders from "@/model/orders.model.js";
import auth from "@/model/auth.model.js";

const api = axios.create({
  baseURL: "https://intern.rahmetapp.kz/api",
});

api.interceptors.request.use(
  function (config) {
    if (localStorage.getItem("access_token")) {
      config.headers.Authorization = localStorage.getItem("access_token");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default {
  restaurants: restaurants(api),
  orders: orders(api),
  auth: auth(api),
};
