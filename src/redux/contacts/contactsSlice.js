import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  contactsArray: [],
  isLoading: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.contactsArray = [];
};

const options = [fetchContacts, addContact, deleteContact];
const getOption = status => options.map(option => option[status]);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contactsArray = payload;
        state.isLoading = false;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contactsArray.push(payload);
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contactsArray = state.contactsArray.filter(
          contact => contact.id !== payload.id )
      })      
      .addMatcher(isAnyOf(...getOption('pending')), handlePending)      
      .addMatcher(isAnyOf(...getOption('rejected')), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
