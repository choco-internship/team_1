export default function (api) {
  return {
    getOrders: () => api.get("/api/myorders").then(({ data }) => data),
    getOrder: (id) => api.get(`/api/myorders/${id}`).then(({ data }) => data),
  };
}
