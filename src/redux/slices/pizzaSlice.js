import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'pizzas',
  initialState: {
    pizzas: [],
  },
  reducers: {
    setPizzas: (state, action) => {},
  },
});

export const pizzaReducer = slice.reducer;

export const { setPizzas } = slice.actions;
