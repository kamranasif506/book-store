import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import CategoriesReducer from './categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    store: bookReducer,
    categories: CategoriesReducer,
  },
});
export default store;
