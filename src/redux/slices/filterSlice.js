import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'filters',
  initialState: {
    activeIndex: 0,
    sortChoice: 'rating',
  },
  reducers: {
    setActiveIndex: (state, action) => {
      console.log(action.payload);
      state.activeIndex = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { setActiveIndex } = slice.actions;
