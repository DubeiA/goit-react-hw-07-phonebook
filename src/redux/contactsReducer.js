import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './contactOperation';

const contactsReducer = createSlice({
  name: 'contacts',
  initialState: {
    entities: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    AddContact: {
      reducer(state, action) {
        console.log(state.entities);
        state.entities.push(action.payload);
      },
      prepare(entities) {
        return {
          payload: entities,
        };
      },
    },
    DeleteContact(state, action) {
      const index = state.entities.findIndex(
        userId => userId.id === action.payload
      );
      state.entities.splice(index, 1);
    },

    SearchByName: (state, action) => {
      state.filter = action.payload.toLowerCase();
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.entities = payload;
    },
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
  },
});

export const { AddContact, DeleteContact, SearchByName } =
  contactsReducer.actions;

export default contactsReducer.reducer;
