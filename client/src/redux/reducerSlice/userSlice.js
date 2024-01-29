'use client'
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    count: 0
}
export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state, action) => {
      
    }
}});

export const { increment } = countSlice.actions;
export default countSlice.reducer;