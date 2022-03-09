export default function (api) {
  return {
    postOrders: (body) => api.post("/orders", body).then(({ data }) => data),
    getOrders: () => api.get("/orders").then(({ data }) => data),
  };
}
