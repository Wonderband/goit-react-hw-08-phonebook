import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const axInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

async function addNewContact(cred, thunkAPI) {
    axInstance.defaults.headers.common['Authorization'] = `Bearer ${cred.token}`;
    
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