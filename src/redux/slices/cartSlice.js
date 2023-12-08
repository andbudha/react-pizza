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
        state.cartItems.unshift({ ...action.payload, count: 1 });
      }
      state.totalSum = state.cartItems.reduce(
        (sum, item) => sum + item.pizzaPrice * item.count,
        0
      );
    },
    removeSimilarPizza: (state, action) => {
      const foundItem = state.cartItems.find(
        (item) => item.pizzaId === action.payload.id
      );
      if (foundItem) {
        foundItem.count--;
      }
      state.totalSum = state.totalSum - foundItem.pizzaPrice;
    },
    removePizza: (state, action) => {
      const foundItem = state.cartItems.find(
        (item) => item.pizzaId === action.payload.pizzaId
      );
      state.cartItems = state.cartItems.filter(
        (item) => item.pizzaId !== action.payload.pizzaId
      );
      state.totalSum = state.totalSum - foundItem.pizzaPrice * foundItem.count;
    },
    removeAllPizzas: (state, action) => {
      state.cartItems = [];
      state.totalSum = 0;
    },
  },
});

export const cartReducer = slice.reducer;
export const {
  addPizza,
  removePizza,
  removeAllPizzas,
  addNewPizza,
  removeSimilarPizza,
} = slice.actions;
