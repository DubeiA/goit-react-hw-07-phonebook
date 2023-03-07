import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contact: [],
  filter: '',
};

const userContact = createSlice({
  name: 'user',
  initialState,

  reducers: {
    AddContact: {
      reducer(state, action) {
        console.log(state.contact);
        state.contact.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: contact,
        };
      },
    },
    DeleteContact(state, action) {
      const index = state.contact.findIndex(
        userId => userId.id === action.payload
      );
      state.contact.splice(index, 1);
    },

    SearchByName: (state, action) => {
      state.filter = action.payload.toLowerCase();
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contact'],
};

export const localStorageContact = persistReducer(
  persistConfig,
  userContact.reducer
);

export const { AddContact, DeleteContact, SearchByName } = userContact.actions;
