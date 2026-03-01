import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-u6bg.onrender.com/api",
});

export default API;
