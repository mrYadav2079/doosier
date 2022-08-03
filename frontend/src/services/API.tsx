import axios from "axios";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
export default axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "content-Type": "application/json",
  },
});