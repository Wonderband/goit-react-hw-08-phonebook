import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

const axInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const logInterceptor = config => {
  config.headers['Authorization'] = localStorage.getItem('token');  
  return config;
};

axInstance.interceptors.request.use(logInterceptor);

async function registerUser(cred, thunkAPI) {
  try {
    const result = await axInstance.post('/users/signup', cred);    
    localStorage.setItem('token', result.data.token);
    Notiflix.Notify.success(
        `Succesfully registered!  Name: ${result.data.user.name} Email: ${result.data.user.email}`
      );
    return result.data;
  } catch (error) {
    Notiflix.Notify.failure(
        `Cannot register you!  Reason: ${error.response.statusText}`
    );
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
}

async function loginUser(cred, thunkAPI) {
  try {
    const result = await axInstance.post('/users/login', cred);        
    localStorage.setItem('token', result.data.token);
    Notiflix.Notify.success(
        `Succesfully logged in!  Name: ${result.data.user.name} Email: ${result.data.user.email}`
      );
    return result.data;
  } catch (error) {
    Notiflix.Notify.failure(
        `Cannot log you in!  Reason: ${error.message}`
      );
    return thunkAPI.rejectWithValue(error.message);
  }
}

async function logOutUser(_, thunkAPI) {   
  try {
    await axInstance.post('/users/logout');    
    localStorage.setItem('token', '');
    Notiflix.Notify.success(
        `Succesfully logged out!`
      );
  } catch (error) {
    Notiflix.Notify.failure(
        `Cannot log you out!  Reason: ${error.message}`
      );
    return thunkAPI.rejectWithValue(error.message);
  }
}

export const register = createAsyncThunk('user/register', registerUser);
export const logIn = createAsyncThunk('user/login', loginUser);
export const logOut = createAsyncThunk('user/logout', logOutUser);