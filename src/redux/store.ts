import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import serviceSlice from "./features/services/serviceSlice";
import { api } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    service: serviceSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
