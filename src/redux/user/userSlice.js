import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getUserData, logIn, logOut, register } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,  
};

const options = [logIn, register, getUserData];
const getOption = status => options.map(option => option[status]);

const handlePending = state => {
  state.isLoggedIn = false;
  state.isLoading = true;  
};
const handleFulfilled = (state, { payload }) => {
  state.user = { name: payload.user.name, email: payload.user.email };
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
}
  
const handleRejected = state => {
  state.isLoggedIn = false;
  state.isLoading = false;  
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logOut.pending, state => {
        state.isLoggedIn = false;
        state.isLoading = true;       
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;        
        state.isLoading = false;
      })
      .addCase(logOut.rejected, state => {        
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(...getOption('pending')), handlePending)
      .addMatcher(isAnyOf(...getOption('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getOption('rejected')), handleRejected);
  },
});

export const userReducer = userSlice.reducer;
