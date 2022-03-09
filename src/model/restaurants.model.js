export default function (api) {
  return {
    getRestaurants: () => api.get("/restaurants").then(({ data }) => data),
    getRestaurant: (id) => api.get(`/menu/${id}`).then(({ data }) => data),
    makeOrder: (order) => api.post("/orders/create", order).then((res) => res),
  };
}
