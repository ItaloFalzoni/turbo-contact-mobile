import { useState } from "react";

import { fetchContacts, sendContact } from "../services/contacts";
import { Contact } from "../interfaces/contact";
import { showMessage } from "react-native-flash-message";

export function useContacts() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function getContacts() {
    const response = await fetchContacts()

    if (response) {
      setContacts(response.data)
    }

    return !!response
  }

  async function addContact(contact: Contact) {
    const success = await sendContact(contact)

    if (success) {
      showMessage({
        message: "Contato adicionado com sucesso",
        type: "success"
      })
    } else {
      showMessage({
        message: "Erro ao adicionar o contato",
        type: "danger"
      })
    }

    return success
  }

  return {
    contacts,
    loading,
    error,
    getContacts,
    addContact,
  }
}