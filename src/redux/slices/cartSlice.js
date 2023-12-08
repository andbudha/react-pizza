import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalSum: 0,
  },
  reducers: {
    addPizza: (state, action) => {
      const foundItem = state.cartItems.find(
        (item) => item.pizzaId === action.payload.pizzaId
      );
      if (foundItem) {
        foundItem.count++;
      } else {
        state.cartItems.push({ ...action.payload, count: 1 });
      }
      // state.cartItems.unshift(action.payload);
      state.totalSum = state.cartItems.reduce(
        (sum, item) => sum + item.pizzaPrice * item.count,
        0
      );
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
