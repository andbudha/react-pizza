import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NewPizza } from '../../types/types';
import { getCartItems } from '../../utils/getLocalStorageItems.tsx';
import { localStrageTotalSum } from '../../utils/localStrageTotalSum.tsx';

const slice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: getCartItems() as NewPizza[],
    totalSum: localStrageTotalSum() as number,
  },
  reducers: {
    addPizza: (state, action: PayloadAction<{ pizza: NewPizza }>) => {
      const foundItem = state.cartItems.find(
        (item: NewPizza) => item.id === action.payload.pizza.id
      );
      if (foundItem && foundItem.count) {
        foundItem.count++;
      } else {
        state.cartItems.unshift({ ...action.payload.pizza, count: 1 });
      }
      state.totalSum = state.cartItems.reduce(
        (sum: number, item: NewPizza) =>
          item.count ? sum + item.count * item.price : 0,
        0
      );
    },
    addSimilarPizza: (state, action: PayloadAction<{ id: string }>) => {
      const foundItem = state.cartItems.find(
        (item: NewPizza) => item.id === action.payload.id
      );
      if (foundItem && foundItem.count) {
        foundItem.count++;
        state.totalSum = state.totalSum + foundItem.price;
      }
    },
    removeSimilarPizza: (state, action: PayloadAction<{ id: string }>) => {
      const foundItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (foundItem && foundItem.count) {
        foundItem.count--;
        state.totalSum = state.totalSum - foundItem.price;
      }
    },
    removePizza: (state, action: PayloadAction<{ id: string }>) => {
      const foundItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      if (foundItem && foundItem.count) {
        state.totalSum = state.totalSum - foundItem.price * foundItem.count;
      }
    },
    removeAllPizzas: (state, _) => {
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
  addSimilarPizza,
  removeSimilarPizza,
} = slice.actions;
