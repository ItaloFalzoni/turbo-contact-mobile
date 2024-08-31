export interface Contact {
  _id?: string;
  name: string;
  surname: string;
  phone: string;
  birthDate: string;
  address: string;
  email: string;
  userId?: string;
  __v?: number;
}

export interface FetchContactsResponse {
  data: Contact[];
}