import * as contactsAPI from './contactsAPI';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addTask',
  async (data, { rejectWithValue }) => {
    try {
      const response = await contactsAPI.addContact('/tasks', { data });
      return response;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
