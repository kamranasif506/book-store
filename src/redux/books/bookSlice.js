import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: 2,
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: 3,
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
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
        category: 'Fiction',
      };
      state.bookItems.push(newItem);
    },
  },
});

export const { removeItem, addItem } = bookSlice.actions;
export default bookSlice.reducer;
