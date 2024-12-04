import { configureStore } from "@reduxjs/toolkit";
import { equipmentsApi } from "./equipmentsApi";
import { trainingsApi } from "./trainingsApi";

export const store = configureStore({
  reducer: {
    [trainingsApi.reducerPath]: trainingsApi.reducer,
    [equipmentsApi.reducerPath]: equipmentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(trainingsApi.middleware)
      .concat(equipmentsApi.middleware),
});
