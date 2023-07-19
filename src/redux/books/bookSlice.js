import { createSlice } from '@reduxjs/toolkit';
import bookItems from '../../bookItems';

const initialState = {
  bookItems,
  total: 0,
};

const bookSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.bookItems = state.bookItems.filter((item) => item.id !== itemId);
    },
    
  },
});

export const { removeItem } = bookSlice.actions;
export default bookSlice.reducer;
