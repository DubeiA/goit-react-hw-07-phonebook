import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './contactOperation';

const contactsReducer = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      entities: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    SearchByName: (state, action) => {
      state.filter = action.payload.toLowerCase();
    },
  },
  extraReducers: {
    // Fecth Contact
    [fetchContacts.pending]: state => {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts.entities = payload;
      state.contacts.isLoading = false;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
    // Add Contact
    [addContact.pending]: state => {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.contacts.entities.push(payload);
      state.contacts.isLoading = false;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
    // delete contact
    [deleteContact.pending]: state => {
      state.contacts.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.entities.findIndex(
        contactID => contactID.id === payload.id
      );
      state.contacts.entities.splice(index, 1);
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
  },
});

export const { AddContact, DeleteContact, SearchByName } =
  contactsReducer.actions;

export default contactsReducer.reducer;
