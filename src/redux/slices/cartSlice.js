import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalAmount: 0,
    totalSum: 0,
  },
  reducers: {
    addPizza: (state, action) => {
      state.cartItems.unshift(action.payload);
    },
    removePizza: (state, action) => {
      state.cartItems.filter((item) => item.id !== action.payload);
    },
    removeAllPizzas: (state, action) => {
      state.cartItems = [];
    },
    setTotalAmount: (state, action) => {
      state.cartItems.length();
    },
  },
});

export const cartReducer = slice.reducer;
export const {} = slice.actions;
