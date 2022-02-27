export default function (api) {
  return {
    getOrders: () => api.get("/orders").then(({ data }) => data),
    getOrder: (id) => api.get(`/order/${id}`).then(({ data }) => data),
  };
}
