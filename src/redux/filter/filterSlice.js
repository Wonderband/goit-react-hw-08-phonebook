import { createSlice } from '@reduxjs/toolkit';

const initialState = '';
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
    reducers: {
        setFilter(_, action) { 
            return action.payload;
        }    
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
