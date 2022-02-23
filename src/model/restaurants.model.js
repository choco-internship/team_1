export default function (api) {
  return {
    getRestaurants: () => api.get("/api/restaurants").then(({ data }) => data),
    getRestaurant: (id) =>
      api.get(`/api/restaurants/${id}`).then(({ data }) => data),
  };
}
