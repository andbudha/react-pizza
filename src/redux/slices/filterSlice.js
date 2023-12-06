import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'filters',
  initialState: {
    activeIndex: 0,
    sortChoice: 'rating asc',
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
    setFilters: (state, action) => {
      state.activeIndex = Number(action.payload.activeIndex);
      state.selectedPage = Number(action.payload.selectedPage);
      state.sortChoice = action.payload.sortChoice;
    },
  },
});

export const filterReducer = slice.reducer;
export const { setActiveIndex, setSortChoice, setSelectedPage, setFilters } =
  slice.actions;
