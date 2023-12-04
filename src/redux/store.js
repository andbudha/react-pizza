import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    filters: filterReducer,
  },
});
console.log(store);
