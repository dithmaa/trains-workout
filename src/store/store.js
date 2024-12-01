import { configureStore } from "@reduxjs/toolkit";
import { equipmentsApi } from "./equipmentsApi";
export const store = configureStore({
  reducer: {
    [equipmentsApi.reducerPath]: equipmentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(equipmentsApi.middleware),
});
