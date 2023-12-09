import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const slice = createSlice({
  name: 'pizzas',
  initialState: {
    isLoading: false,
    pizzas: [],
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload;
    });
  },
});

const setPizzas = createAsyncThunk(
  'pizzas/setPizzas',
  async (
    { activeIndex, finalSortChoice, finalOrder, filter, selectedPage },
    thinkIPI
  ) => {
    const { dispatch } = thinkIPI;
    dispatch(pizzaActions.setIsLoading(true));
    const res = await axios.get(
      `https://656897589927836bd975198a.mockapi.io/reactpizza/api/1/items?${
        activeIndex > 0 ? `category=${activeIndex}` : ''
      }&sortBy=${finalSortChoice}&order=${finalOrder}&filter=${filter}&limit=4&p=${selectedPage}`
    );

    try {
      const pizzas = res.data;
      console.log(pizzas);
      return pizzas;
    } catch (error) {
    } finally {
      dispatch(pizzaActions.setIsLoading(false));
    }
  }
);

export const pizzaReducer = slice.reducer;
export const pizzaActions = slice.actions;
export const pizzaThunks = { setPizzas };
