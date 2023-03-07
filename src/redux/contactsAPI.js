import axios from 'axios';

axios.defaults.baseURL = 'https://6406f7f2862956433e5f399c.mockapi.io/';

export async function fetchContacts() {
  const response = await axios.get('contacts');
  return response.data;
}
