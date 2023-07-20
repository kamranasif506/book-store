import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const uniqId = 'sZLjy6J95NjtYAUw7Ias';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${uniqId}`;

export const getBookItems = createAsyncThunk(
  'books/getBookItems',
  async (thunkAPI) => {
    try {
      const resp = await axios(`${baseUrl}/books`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const addBookItem = createAsyncThunk(
  'books/addBookItem',
  async (data, thunkAPI) => {
    try {
      const res = await axios.post(`${baseUrl}/books`, data);
      const responseData = res.data[0];

      return responseData;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const removeBookItem = createAsyncThunk('books/removeBookItem', async (itemId, thunkAPI) => {
  try {
    await axios.delete(`${baseUrl}/books/${itemId}`);
    return itemId;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

const initialState = {
  bookItems: [],
  total: 0,
  isLoading: false,
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
  extraReducers: (builder) => {
    builder
      .addCase(getBookItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookItems.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        if (action.payload === '') {
          state.bookItems = [];
        } else {
          const bookItemsArray = Object.entries(action.payload).map(([itemId, item]) => ({
            item_id: itemId,
            ...item[0],
          }));
          // console.log(bookItemsArray);
          state.bookItems = bookItemsArray;
          // console.log(state);
        }
      })
      .addCase(getBookItems.rejected, (state) => {
        // console.log(action);
        state.isLoading = false;
      })
      .addCase(addBookItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBookItem.fulfilled, (state, action) => {
        const newItem = action.meta.arg;
        state.bookItems.push(newItem);
        state.isLoading = false;
      })
      .addCase(addBookItem.rejected, (state) => {
        // console.log(action);
        state.isLoading = false;
      })
      .addCase(removeBookItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBookItem.fulfilled, (state, action) => {
        console.log(action.payload);
        state.bookItems = state.bookItems.filter((item) => item.item_id !== action.payload);
        state.isLoading = false;
      })
      .addCase(removeBookItem.rejected, (state) => {
        // console.log(action);
        state.isLoading = false;
      });
  },
});

export const { removeItem, addItem } = bookSlice.actions;
export default bookSlice.reducer;
