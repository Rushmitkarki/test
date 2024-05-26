import axios from "axios";

// creating backend config!

const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
// Test API
export const testApi = () => api.get("/test");

// Register api
export const registerUserApi = (data) => api.post("/api/user/create", data);

// Login api
export const loginUserApi = (data) => api.post("/api/user/login", data);

// create product api
// export const createProductApi = (data) => api.post("/api/product/create", data);
export const createProductApi = (data) => api.post("/api/product/create", data);
