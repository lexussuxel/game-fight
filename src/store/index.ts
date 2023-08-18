import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import gameSlice from "./gameSlice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    gameSlice,
  },
  middleware: customizedMiddleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const storeDispatch = store.dispatch;
