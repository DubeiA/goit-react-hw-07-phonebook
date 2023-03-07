import * as contactsAPI from './contactsAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const contacts = await contactsAPI.fetchContacts();
  return contacts;
});
