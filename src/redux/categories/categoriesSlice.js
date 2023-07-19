import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under Construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategoryStatus: (state) => state.status,
  },
});

export const { getCategoryStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
