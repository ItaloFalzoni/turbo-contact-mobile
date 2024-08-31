import { setItem } from "../services/asyncStoage"
import { fetchLogin } from "../services/login"

export default function useAuth() {

  async function login(username: string, password: string) {
    const response = await fetchLogin(username, password)

    if (response) {
      await setItem("token", response.data.token)
    }

    return response?.status
  }

  return {
    login
  }
}