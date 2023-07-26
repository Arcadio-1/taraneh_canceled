import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import uiSlice from "./features/ui/uiSlice";
import dataSlice from "./features/data/dataSlice";
import { cartApi } from "./features/services/apiSlice";

export const store = configureStore({
  reducer: {
    // [cartApi.reducerPath]: cartApi.reducer,
    ui: uiSlice,
    data: dataSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(cartApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
