import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "https://quickchat-backend-osnh.onrender.com/api",
  withCredentials: true,
})

















// import axios from "axios"

// const API_URL =
//   import.meta.env.MODE === "development"
//     ? "http://localhost:5000/api"
//     : "https://quickchat-backend-osnh.onrender.com/api"

// export const axiosInstance = axios.create({
//   baseURL: API_URL,
//   withCredentials: true,
// })












// import axios from "axios"

// export const axiosInstance = axios.create({
//     baseURL: import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api",
//     withCredentials: true
// })