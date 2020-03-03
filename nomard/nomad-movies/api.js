import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "20d1eb320e8a0dd5ce9fef928354b2c5",
    language: "en-US"
  }
});

export default api;
