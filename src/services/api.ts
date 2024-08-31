import axios from "axios"
import { getItem } from "./asyncStoage"

const api = axios.create({
  baseURL: "http://10.0.2.2:3000", // unfortunately, this is the only way to access localhost from the emulator
})

api.interceptors.request.use(async (config) => {
  const token = await getItem("token")

  if (token) {
    config.headers.Authorization = token
  }

  return config;
})

export default api