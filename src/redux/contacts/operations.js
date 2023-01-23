import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const axInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});


async function addNewContact(cred, thunkAPI) {
  // axInstance.defaults.headers.common['Authorization'] = JSON.parse(localStorage.getItem('persist:userData'))['token'];
  // console.log(JSON.parse(localStorage.getItem('persist:userData')).token);
    // `Bearer ${cred.token}`;
  const token = localStorage.getItem('token');
    axInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log(cred);
  try {
      const result = await axInstance.post('/contacts', { name: cred.name, number: cred.number });
    console.log(result);
    // axInstance.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;
    return result.data;
  } catch (err) {
      console.log(err.message);
    return thunkAPI.rejectWithValue(err.message);
  }
}

export const addContact = createAsyncThunk('contacts/addContact', addNewContact);