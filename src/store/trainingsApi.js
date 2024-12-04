import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const trainingsApi = createApi({
  reducerPath: "trainingsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.healthtop.ru/",
  }),
  endpoints: (builder) => ({
    getTrainings: builder.query({
      query: () => "/trainings/",
    }),
    createTraining: builder.mutation({
      query: (body) => ({
        url: "/trainings/",
        method: "POST",
        body,
      }),
    }),

    createExercize: builder.mutation({
      query: (body) => ({
        url: "/trainings/exercizes/",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const {
  useGetTrainingsQuery,
  useCreateTrainingMutation,
  useCreateExercizeMutation,
} = trainingsApi;
