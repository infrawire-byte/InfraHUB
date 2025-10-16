import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'rh',
  initialState: {
    filters: {},
  },
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
    },
    resetFilters(state) {
      state.filters = {};
    },
  },
});

export const { setFilters, resetFilters } = slice.actions;
export default slice.reducer;
