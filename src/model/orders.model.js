export default function (api) {
  return {
    getOrders: (body) => api.post("/orders", body).then(({ data }) => data),
    getOrder: (id) => api.get(`/order/${id}`).then(({ data }) => data),
  };
}
