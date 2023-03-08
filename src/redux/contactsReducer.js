import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts } from './contactOperation';

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
    AddContact: {
      reducer(state, action) {
        console.log(state.contacts.entities);
        state.contacts.entities.push(action.payload);
      },
      prepare(entities) {
        return {
          payload: entities,
        };
      },
    },
    DeleteContact(state, action) {
      const index = state.contacts.entities.findIndex(
        userId => userId.id === action.payload
      );
      state.contacts.entities.splice(index, 1);
    },

    SearchByName: (state, action) => {
      state.filter = action.payload.toLowerCase();
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts.entities = payload;
      state.contacts.isLoading = false;
    },
    [fetchContacts.pending]: state => {
      state.contacts.isLoading = true;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
    [addContact.fulfilled]: (state, action) => {
      console.log(state.contacts.entities);
      state.contacts.entities.push(action.payload);
    },
  },
});

export const { AddContact, DeleteContact, SearchByName } =
  contactsReducer.actions;

export default contactsReducer.reducer;
