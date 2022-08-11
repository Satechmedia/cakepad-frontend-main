import axios from "axios";

const API = axios.create({
  baseURL: "https://cakepad-server.herokuapp.com/v1",
});

export { API };
