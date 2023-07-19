import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';

export const store = configureStore({
  reducer: {
    store: bookReducer,
  },
});
export default store;
