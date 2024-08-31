import api from "./api";

export async function fetchLogin(username: string, password: string) {
  try {
    return await api.post("/login", { username, password })
  } catch (error) {
    console.error(error)
    return null
  }
}