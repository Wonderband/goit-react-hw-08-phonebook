import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

export const axInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// const logInterceptor = config => {
//   config.headers['Authorization'] = localStorage.getItem('token');  
//   return config;
// };

const setToken = (token) => {
  axInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const unSetToken = () => {
  axInstance.defaults.headers.common.Authorization = ``;
}

// axInstance.interceptors.request.use(logInterceptor);

async function registerUser(cred, thunkAPI) {
  try {
    const result = await axInstance.post('/users/signup', cred);    
    setToken(result.data.token);
    // localStorage.setItem('token', result.data.token);
    Notiflix.Notify.success(
        `Succesfully registered!  Name: ${result.data.user.name} Email: ${result.data.user.email}`
    );
    console.log(result);
    return result.data;
  } catch (error) {
    Notiflix.Notify.failure(
        `Cannot register you!  Reason: ${error.message}`
    );
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
}

async function loginUser(cred, thunkAPI) {
  try {
    const result = await axInstance.post('/users/login', cred);        
    // localStorage.setItem('token', result.data.token);
    setToken(result.data.token);
    Notiflix.Notify.success(
        `Succesfully logged in!  Name: ${result.data.user.name} Email: ${result.data.user.email}`
    );
    console.log(result.data);
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
    // localStorage.setItem('token', '');
    unSetToken();
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

async function getCurrentUserData(_, thunkAPI) { 
  try {
    const { token } = thunkAPI.getState().userData;
    if (!token) { 
      return thunkAPI.rejectWithValue('Cannot log you in!');
    }
    setToken(token);
    const result = await axInstance.get('/users/current'); 
    console.log(result);
    Notiflix.Notify.success(
        `Succesfully logged in!  Name: ${result.data.name} Email: ${result.data.email}`
    );
    console.log(result);
    return result.data;
    
  } catch (error) {
    Notiflix.Notify.failure(
        `Cannot log you in!  Reason: ${error.message}`
    );
    return thunkAPI.rejectWithValue(error.message);    
  }
}

export const register = createAsyncThunk('user/register', registerUser);
export const logIn = createAsyncThunk('user/login', loginUser);
export const logOut = createAsyncThunk('user/logout', logOutUser);
export const getUserData = createAsyncThunk('user/getData', getCurrentUserData);