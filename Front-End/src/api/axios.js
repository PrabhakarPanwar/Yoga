import axios from "axios";

// Set VITE_API_URL in your frontend .env files:
//   .env.development  -> VITE_API_URL=http://localhost:8000
//   .env.production   -> VITE_API_URL=https://your-deployed-backend-url.com
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",
});

// Automatically attach the JWT to every outgoing request if one exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;