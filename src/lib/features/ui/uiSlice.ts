import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
export interface UiState {
  isDark: number;
}

// Define the initial state using that type
const initialState = {
  isDark: 0,
} as UiState;

export const uiSlice = createSlice({
  name: "ui",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    darkOn: (state) => {
      state.isDark = 1;
    },
    darkOff: (state) => {
      state.isDark = 0;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    otherTheme: (state, action: PayloadAction<number>) => {
      state.isDark = action.payload;
    },
  },
});

export const { darkOn, darkOff, otherTheme } = uiSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.ui.isDark;

export default uiSlice.reducer;
