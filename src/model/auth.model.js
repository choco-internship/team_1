export default function (api) {
  return {
    registerUser: (body) =>
      api.post("/register", body).then(({ data }) => data),
    loginUser: (body) => api.post("/login", body).then(({ data }) => data),
  };
}
