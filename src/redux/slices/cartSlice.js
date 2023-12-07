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
      const pizza = {
        id: action.payload.pizzaId,
        image: action.payload.pizzaImage,
        name: action.payload.pizzaName,
        price: action.payload.pizzaPrice,
      };
      state.cartItems.unshift(pizza);
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
export const { addPizza, removePizza, removeAllPizzas, setTotalAmount } =
  slice.actions;
