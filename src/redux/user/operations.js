import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const axInstance = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
}
);

async function  registerUser(cred, thunkAPI)  {
    try {
        const result = await axInstance.post('/users/signup', cred);
        console.log(result);
        axInstance.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;       
        return result.data;
        
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)        
    }
 };

export const register = createAsyncThunk('user/register', registerUser);

