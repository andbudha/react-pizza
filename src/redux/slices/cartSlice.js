import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
    totalSum: 0,
  },
  reducers: {
    addPizza: (state, action) => {
      state.items.unshift(action.payload);
    },
    removePizza: (state, action) => {
      state.items.filter((item) => item.id !== action.payload);
    },
    removeAllPizzas: (state, action) => {
      state.items = [];
    },
    setTotalAmount: (state, action) => {
      state.items.length();
    },
  },
});

export const cartReducer = slice.reducer;
export const {} = slice.actions;
