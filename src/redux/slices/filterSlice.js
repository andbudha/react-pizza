import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeIndex: 0,
  sortChoice: 'rating',
};

export const slice = createSlice({
  name: 'filters',
  initialState: {},
  reducers: {
    setActiveIndex: (state, action) => {
      console.log(action.payload);
      state.activeIndex = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { setActiveIndex } = slice.actions;
