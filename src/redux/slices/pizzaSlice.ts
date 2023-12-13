import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { Pizza, SetPizzaParams } from '../../types/types';

const statuses = {
  loading: 'loading',
  success: 'success',
  error: 'error',
} as const;
const slice = createSlice({
  name: 'pizzas',
  initialState: {
    status: statuses,
    pizzas: [] as Pizza[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setPizzas.pending, (state, _) => {
        state.status.loading = statuses.loading;
      })
      .addCase(setPizzas.fulfilled, (state, action) => {
        state.status.success = statuses.success;
        state.pizzas = action.payload;
      })
      .addCase(setPizzas.rejected, (state, _) => {
        state.status.error = statuses.error;
      });
  },
});

const setPizzas = createAsyncThunk<Pizza[], SetPizzaParams>(
  'pizzas/setPizzas',
  async (
    { activeIndex, finalSortChoice, finalOrder, filter, selectedPage },
    thunkIPI
  ) => {
    const { dispatch, rejectWithValue } = thunkIPI;
    const res = await axios.get<Pizza[]>(
      `https://656897589927836bd975198a.mockapi.io/reactpizza/api/1/items?${
        activeIndex > 0 ? `category=${activeIndex}` : ''
      }&sortBy=${finalSortChoice}&order=${finalOrder}&filter=${filter}&limit=4&p=${selectedPage}`
    );

    try {
      const pizzas = res.data;

      return pizzas;
    } catch (error) {
      return rejectWithValue(null);
    } finally {
    }
  }
);

export const pizzaReducer = slice.reducer;
export const pizzaActions = slice.actions;
export const pizzaThunks = { setPizzas };
