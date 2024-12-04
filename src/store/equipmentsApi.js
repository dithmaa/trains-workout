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
  }),
});
export const { useGetEquipmentsQuery } = equipmentsApi;
