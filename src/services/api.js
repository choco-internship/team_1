import axios from "axios";
import restaurants from "../model/restaurants.model.js";
import orders from "../model/orders.model.js";
import auth from "../model/auth.model.js";

const api = axios.create({
  baseURL: "https://intern.rahmetapp.kz/api",
});

export default {
  restaurants: restaurants(api),
  orders: orders(api),
  auth: auth(api),
};
