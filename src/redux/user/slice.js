import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';
import Notiflix from 'notiflix';

const initialState = {
    user: {
        name: null,
        email: null,
    }, 
//   password: null,
  token: null,
  isLoggedIn: false,
  //   isRefreshing: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, (state, {payload}) => {
                state.user.name = payload.user.name;
                state.user.email = payload.user.email;
                // state.password = payload.password;
                state.token = payload.token;
                state.isLoggedIn = true;                
                Notiflix.Notify.success(`Succesfully registered!  Name: ${payload.user.name} Email: ${payload.user.email}`);
            })
        .addCase(register.rejected, () => {console.log('rejected!'); })
    } 
});
