import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './operations';
import Notiflix from 'notiflix';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  // isLoading: false,
};

const options = [logIn, register];
const getOption = status => options.map(option => option[status]);

const handlePending = state => {
  state.isLoggedIn = false;
  // state.isLoading = true;
  Notiflix.Loading.circle();
};

const handleFulfilled = (state, { payload }) => {
  Notiflix.Loading.remove();
  state.user.name = payload.user.name;
  state.user.email = payload.user.email;
  state.token = payload.token;
  state.isLoggedIn = true;
  // state.isLoading = false;
};
const handleRejected = (state, payload) => {
  Notiflix.Loading.remove();
  state.isLoggedIn = false;
  // state.isLoading = false;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        Notiflix.Notify.success(
          `Succesfully registered!  Name: ${payload.user.name} Email: ${payload.user.email}`
        );
      })
      .addCase(register.rejected, (state, payload) => {
        Notiflix.Notify.failure(`Cannot register!  ${payload.payload}`);
        console.log(payload);
      })
      .addCase(logIn.fulfilled, (_, { payload }) => {
        Notiflix.Notify.success(
          `Succesfully logged in!  Name: ${payload.user.name} Email: ${payload.user.email}`
        );
      })
      .addCase(logIn.rejected, (_, payload) => {
        Notiflix.Notify.failure(`Cannot log In!  ${payload.payload}`);
      })
      .addCase(logOut.pending, () => {
        Notiflix.Loading.circle();       
      })
      .addCase(logOut.fulfilled, (state) => {
        Notiflix.Loading.remove();
        Notiflix.Notify.success(`Succesfully logged out!`);
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;        
      })
      .addCase(logOut.rejected, (_, payload) => {
        Notiflix.Loading.remove();
        Notiflix.Notify.failure(`Cannot log out! ${payload.payload}`);
        // console.log(payload);
      })
      .addMatcher(isAnyOf(...getOption('pending')), handlePending)
      .addMatcher(isAnyOf(...getOption('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getOption('rejected')), handleRejected);
  },
});

export const userReducer = userSlice.reducer;
