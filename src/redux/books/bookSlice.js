import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [],
  total: 0,
};

const bookSlice = createSlice({
  name: 'bookStore',
  initialState,
});

export default bookSlice.actions;
