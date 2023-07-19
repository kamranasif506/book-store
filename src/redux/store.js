import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';

const store = configureStore({
  reducer: bookReducer,
});

export default store;
