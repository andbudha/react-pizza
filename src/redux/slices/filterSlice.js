import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'filters',
  initialState: {
    activeIndex: 0,
    sortChoice: 'rating asc',
    selectedPage: 1,
    searchValue: '',
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
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const {
  setActiveIndex,
  setSortChoice,
  setSelectedPage,
  setFilters,
  setSearchValue,
} = slice.actions;
