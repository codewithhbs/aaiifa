import axios from "axios";

const api = axios.create({
  baseURL: "https://api.aaiifa.org/api",
});

export default api;
