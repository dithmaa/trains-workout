import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const equipmentsApi = createApi({
  reducerPath: "equipmentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.healthtop.ru/",
  }),
  endpoints: (builder) => ({
    getEquipments: builder.query({
      query: () => "/equipments",
    }),
    updateEquipments: builder.mutation({
      query: (updateData) => ({
        url: "/equipments/update", // Путь для обновления
        method: "POST", // HTTP метод
        body: updateData, // Данные, которые мы передаем в запросе
      }),
    }),

    // endpoint для получения обновленного оборудования от пользователя
    getUpdatedEquipments: builder.mutation({
      query: (choicesData) => ({
        url: "/equipments/fromuser", // Путь для получения от пользователя
        method: "POST", // HTTP метод
        body: choicesData, // Данные, которые мы передаем в запросе
      }),
    }),
  }),
});
export const {
  useGetEquipmentsQuery,
  useUpdateEquipmentsMutation,
  useGetUpdatedEquipmentsMutation,
} = equipmentsApi;
