import { configureStore } from "@reduxjs/toolkit";
import equipmentsSlice from "./equipmentsSlice";

export const store = configureStore({
  reducer: {
    equipments: equipmentsSlice,
  },
});
