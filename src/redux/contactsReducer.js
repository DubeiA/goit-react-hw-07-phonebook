import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './contactOperation';

const contactsReducer = createSlice({
  name: 'contacts',
  initialState: {
    entities: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      state.entities = action.payload;
    },
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
  },
});

export default contactsReducer.reducer;
