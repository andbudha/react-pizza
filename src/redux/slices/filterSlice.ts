import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WindowsLocationParams } from '../../types/types';
const slice = createSlice({
  name: 'filters',
  initialState: {
    activeIndex: 0 as number,
    sortChoice: 'rating asc' as string,
    selectedPage: 1 as number,
    searchValue: '' as string,
  },
  reducers: {
    setActiveIndex: (state, action: PayloadAction<{ index: number }>) => {
      state.activeIndex = action.payload.index;
    },
    setSortChoice: (state, acton: PayloadAction<{ choice: string }>) => {
      state.sortChoice = acton.payload.choice;
    },
    setSelectedPage: (state, action: PayloadAction<{ pageNumber: number }>) => {
      state.selectedPage = action.payload.pageNumber;
    },
    setFilters: (
      state,
      action: PayloadAction<{
        activeIndex: WindowsLocationParams;
        selectedPage: WindowsLocationParams;
        sortChoice: string;
      }>
    ) => {
      state.activeIndex = Number(action.payload.activeIndex);
      state.selectedPage = Number(action.payload.selectedPage);
      state.sortChoice = action.payload.sortChoice;
    },
    setSearchValue: (state, action: PayloadAction<{ value: string }>) => {
      state.searchValue = action.payload.value;
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
