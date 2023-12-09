import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const slice = createSlice({
  name: 'pizzas',
  initialState: {
    status: '', //loading | success | error
    pizzas: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setPizzas.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(setPizzas.fulfilled, (state, action) => {
        state.status = 'success';
        state.pizzas = action.payload;
      })
      .addCase(setPizzas.rejected, (state, action) => {
        state.status = 'error';
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
    const res = await axios.get(
      `https://656897589927836bd975198a.mockapi.io/reactpizza/api/1/items?${
        activeIndex > 0 ? `category=${activeIndex}` : ''
      }&sortBy=${finalSortChoice}&order=${finalOrder}&filter=${filter}&limit=4&p=${selectedPage}`
    );

    try {
      const pizzas = res.data;
      return pizzas;
    } catch (error) {
    } finally {
    }
  }
);

export const pizzaReducer = slice.reducer;
export const pizzaActions = slice.actions;
export const pizzaThunks = { setPizzas };
