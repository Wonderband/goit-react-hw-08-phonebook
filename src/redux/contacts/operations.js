import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

const axInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

const logInterceptor = config => {
  config.headers['Authorization'] = localStorage.getItem('token');
  return config;
};

axInstance.interceptors.request.use(logInterceptor);

async function fetchAllContacts(_, thunkAPI) {
  try {
    const result = await axInstance.get('/contacts');
    Notiflix.Notify.success(`Contacts found!`);
    return result.data;
  } catch (error) {
    Notiflix.Notify.failure(`Cannot find your contacts!`);
    return thunkAPI.rejectWithValue(error.message);
  }
}

async function addNewContact(cred, thunkAPI) {
  try {
    const getContacts = await axInstance.get('/contacts');
    if (
      getContacts.data.some(
        contact => contact.name.toLowerCase() === cred.name.toLowerCase().trim()
      )
    ) {
      Notiflix.Notify.failure(
        `${cred.name} is already in contacts! Cannot add!`
      );
      return thunkAPI.rejectWithValue('Double name!');
    } else {
      try {
        const result = await axInstance.post('/contacts', {
          name: cred.name,
          number: cred.number,
        });
        Notiflix.Notify.success(
          `New contact created! Name: ${cred.name}  Number: ${cred.number}`
        );
        return result.data;
      } catch (error) {
        // Notiflix.Notify.failure(
        //   `Cannot add a new contact!  Reason: ${error.response.statusText}`
        // );
        // return thunkAPI.rejectWithValue(error.message);
        throw new Error(error.message);
      }
    }
  } catch (error) {
    Notiflix.Notify.failure(
      `Cannot add a new contact!  Reason: ${error.response.statusText}`
    );
    return thunkAPI.rejectWithValue(error.message);
  }
}

async function deleteThisContact(id, thunkAPI) {
  try {
    const response = await axInstance.delete(`/contacts/${id}`);
    Notiflix.Notify.success(`Successfully deleted!`);
    console.log(response);
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure(
      `Cannot delete this contact!  Reason: ${error.response.statusText}`
    );
    return thunkAPI.rejectWithValue(error.message);
  }
}

export const addContact = createAsyncThunk(
  'contacts/addContact',
  addNewContact
);
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  fetchAllContacts
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  deleteThisContact
);
