import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  dumbbells: [], // Для хранения гантелей
};
export const equipmentsSlice = createSlice({
  name: "equipments",
  initialState,
  reducers: {
    setDumbbells: (state, { payload }) => {
      state.dumbbells = payload; // Полностью перезаписываем данные
    },
    setBarbells: (state, { payload }) => {
      state.barbells = payload; // Полностью перезаписываем данные
    },
  },
});

export const { setDumbbells, setBarbells } = equipmentsSlice.actions;
export default equipmentsSlice.reducer;
