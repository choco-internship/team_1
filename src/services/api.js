import axios from "axios";
import restaurants from "../model/restaurants.model.js";
import orders from "../model/orders.model.js";

const api = axios.create({
  baseURL: "https://rakhmetapi.herokuapp.com/api",
});

export default {
  restaurants: restaurants(api),
  orders: orders(api),
};
