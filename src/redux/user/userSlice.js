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
  // state.user.email = payload.user.email;
  state.token = payload.token;
  state.isLoggedIn = true;  
  state.isLoading = false;
  state.isError = false;
};
const handleRejected = (state, payload) => {  
  state.isLoggedIn = false;
  state.isLoading = false;
  state.isError = true;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      // .addCase(register.fulfilled, (state, { payload }) => {
      //   Notiflix.Notify.success(
      //     `Succesfully registered!  Name: ${payload.user.name} Email: ${payload.user.email}`
      //   );
      // })
      // .addCase(register.rejected, (state, payload) => {
      //   Notiflix.Notify.failure(`Cannot register!  ${payload.payload}`);
      //   console.log(payload);
      // })
      // .addCase(logIn.fulfilled, (_, { payload }) => {
      //   Notiflix.Notify.success(
      //     `Succesfully logged in!  Name: ${payload.user.name} Email: ${payload.user.email}`
      //   );
      // })
      // .addCase(logIn.rejected, (_, payload) => {
      //   Notiflix.Notify.failure(`Cannot log In!  ${payload.payload}`);
      // })
      // .addCase(logOut.pending, () => {
      //   Notiflix.Loading.circle();       
      // })
      .addCase(logOut.fulfilled, (state) => {
        // Notiflix.Loading.remove();
        // Notiflix.Notify.success(`Succesfully logged out!`);
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false; 
        state.isError = false;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, (state) => {
        // Notiflix.Loading.remove();
        // Notiflix.Notify.failure(`Cannot log out! ${payload.payload}`);
        // console.log(payload);
        state.isError = true;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(...getOption('pending')), handlePending)
      .addMatcher(isAnyOf(...getOption('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getOption('rejected')), handleRejected);
  },
});

export const userReducer = userSlice.reducer;
