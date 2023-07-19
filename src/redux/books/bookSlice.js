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
    addItem: (state, { payload }) => {
      const { title, author } = payload;
      const newItem = {
        id: state.bookItems.length + 1,
        title,
        author,
      };
      state.bookItems.push(newItem);
    },
  },
});

export const { removeItem, addItem } = bookSlice.actions;
export default bookSlice.reducer;
