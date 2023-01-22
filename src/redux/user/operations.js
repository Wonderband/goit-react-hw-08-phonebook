import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const axInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

async function registerUser(cred, thunkAPI) {
  try {
    const result = await axInstance.post('/users/signup', cred);
    console.log(result);
    axInstance.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;
    return result.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
}

async function loginUser(cred, thunkAPI) {
  try {
    const result = await axInstance.post('/users/login', cred);
    console.log(result);
    axInstance.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;
    return result.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
}
async function logOutUser(token, thunkAPI) {
   axInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  try {
    await axInstance.post('/users/logout');   
    axInstance.defaults.headers.common['Authorization'] = ``;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
}

export const register = createAsyncThunk('user/register', registerUser);
export const logIn = createAsyncThunk('user/login', loginUser);
export const logOut = createAsyncThunk('user/logout', logOutUser);