import { Contact, FetchContactsResponse } from "../interfaces/contact"
import api from "./api"

export async function fetchContacts(): Promise<FetchContactsResponse | null> {
  try {
    return await api.get("/api/contacts")
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function sendContact(body: Contact): Promise<boolean> {
  try {
    const response = await api.post("/api/contacts", body)
    return response?.status === 200
  } catch (error) {
    console.error(error)
    return false
  }
}