import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slices/filterSlice.ts';
import { cartReducer } from './slices/cartSlice.ts';
import { pizzaReducer } from './slices/pizzaSlice.ts';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    cart: cartReducer,
    pizzas: pizzaReducer,
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
