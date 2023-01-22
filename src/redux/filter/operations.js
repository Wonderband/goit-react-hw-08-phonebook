import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const axInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});