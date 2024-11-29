import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  dumbbells: [], // Для хранения гантелей
  barbells: [], // Для хранения штанг
  inventory: [],
  trenazhors: [],
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
    setInventory: (state, { payload }) => {
      state.inventory = payload; // Полностью перезаписываем данные
    },
    setTrenazhors: (state, { payload }) => {
      state.trenazhors = payload; // Полностью перезаписываем данные
    },
  },
});

export const { setDumbbells, setBarbells, setInventory, setTrenazhors } =
  equipmentsSlice.actions;
export default equipmentsSlice.reducer;
