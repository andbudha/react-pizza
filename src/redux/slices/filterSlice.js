import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'filters',
  initialState: {
    activeIndex: 0,
    sortChoice: 'rating',
  },
  reducers: {
    setActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    },
    setSortChoice: (state, acton) => {
      state.sortChoice = acton.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { setActiveIndex, setSortChoice } = slice.actions;
