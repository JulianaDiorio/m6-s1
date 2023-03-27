import axios from "axios";

const tokenUser = localStorage.getItem("@token:token");

export const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${tokenUser}`,
  },
});
