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
    addSimilarPizza: (state, action) => {
      const foundItem = state.cartItems.find(
        (item) => item.pizzaId === action.payload.id
      );
      if (foundItem) {
        foundItem.count++;
      }
      // state.cartItems.unshift(action.payload);
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
export const {
  addPizza,
  removePizza,
  removeAllPizzas,
  addNewPizza,
  addSimilarPizza,
  removeSimilarPizza,
} = slice.actions;
