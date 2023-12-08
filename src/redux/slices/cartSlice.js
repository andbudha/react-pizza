import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalSum: 0,
  },
  reducers: {
    addPizza: (state, action) => {
      state.cartItems.unshift(action.payload);
    },
    removePizza: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    removeAllPizzas: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const cartReducer = slice.reducer;
export const { addPizza, removePizza, removeAllPizzas } = slice.actions;
