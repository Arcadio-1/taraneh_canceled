import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
interface DataSlice {
  products: any;
}

// Define the initial state using that type
const initialState = {
  products: [],
} as DataSlice;

export const dataSlice = createSlice({
  name: "data",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.products = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.data.products;

export default dataSlice.reducer;
