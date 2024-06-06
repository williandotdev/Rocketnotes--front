import axios from "axios"

export const api = axios.create({
  // baseURL: "https://rocketnotes-api-fdaf.onrender.com".
  baseURL: "http://localhost:3333",
})
