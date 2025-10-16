import { configureStore, createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    globalFilters: {},
  },
  reducers: {
    setGlobalFilter(state, action) {
      state.globalFilters[action.payload.key] = action.payload.value;
    },
    clearGlobalFilters(state) {
      state.globalFilters = {};
    },
  },
});

export const { setGlobalFilter, clearGlobalFilters } = uiSlice.actions;

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});

export default store;
