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
        id: Math.random() * 10,
        image: action.payload.pizzaImage,
        name: action.payload.pizzaName,
        price: action.payload.pizzaPrice,
        size: action.payload.pizzaSize,
        crustType: action.payload.crustType,
        amount: 1,
      };
      state.cartItems.unshift(pizza);
    },
    removePizza: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
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
