import axios from "axios";
import restaurants from "../model/restaurants.model.js";
import orders from "../model/orders.model.js";
import auth from "../model/auth.model.js";

const api = axios.create({
  baseURL: "http://142.93.107.238/api",
});

export default {
  restaurants: restaurants(api),
  orders: orders(api),
  auth: auth(api),
};
