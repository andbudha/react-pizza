import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'filters',
  initialState: {
    activeIndex: 0,
    sortChoice: 'rating',
    selectedPage: 1,
  },
  reducers: {
    setActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    },
    setSortChoice: (state, acton) => {
      state.sortChoice = acton.payload;
    },
    setSelectedPage: (state, action) => {
      state.selectedPage = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { setActiveIndex, setSortChoice, setSelectedPage } = slice.actions;
