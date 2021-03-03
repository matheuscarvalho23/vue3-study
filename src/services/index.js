import axios from "axios";
import AuthService from "./auth";

const API_ENVS = {
  production: "",
  development: "",
  local: "http://localhost:3000"
};

const httpClient = axios.create({
  baseURL: API_ENVS.local
});

httpClient.interceptors.response.use(
  response => response,
  error => {
    const canThrowAnArror = error.request.status === 0 || error.request.status === 500;

    if (canThrowAnArror) throw new Error(error.message);

    return error;
  }
);

export default {
  auth: AuthService(httpClient)
};
