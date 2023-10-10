import { createSlice } from '@reduxjs/toolkit';

const initialState = false;
const darkModeSlice = createSlice({
  initialState,
  name: 'darkMode',
  reducers: {
    toggleDarkMode(state) {
      return !state;
    },
  },
});

// auto create ActionCreators
export const { toggleDarkMode } = darkModeSlice.actions;

// auto create reducer
export const darkModeReducer = darkModeSlice.reducer;
