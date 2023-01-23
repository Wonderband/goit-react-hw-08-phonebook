import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './operations';
// import Notiflix from 'notiflix';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isError: false,
};

const options = [logIn, register];
const getOption = status => options.map(option => option[status]);

const handlePending = state => {
  state.isLoggedIn = false;
  state.isLoading = true;
  state.isError = false;
};
const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.isError = false;
};
const handleRejected = state => {
  state.isLoggedIn = false;
  state.isLoading = false;
  state.isError = true;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logOut.pending, state => {
        state.isLoggedIn = false;
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isError = false;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, state => {
        state.isError = true;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(...getOption('pending')), handlePending)
      .addMatcher(isAnyOf(...getOption('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getOption('rejected')), handleRejected);
  },
});

export const userReducer = userSlice.reducer;
