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
    createTraining: builder.mutation({
      query: (body) => ({
        url: "/trainings/",
        method: "POST",
        body,
      }),
    }),
    createExercisez: builder.mutation({
      query: (body) => ({
        url: "/trainings/exercizes/",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const {
  useGetEquipmentsQuery,
  useCreateTrainingMutation,
  useCreateExercisezMutation,
} = equipmentsApi;
