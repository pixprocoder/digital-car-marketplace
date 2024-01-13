import { getBaseUrl } from "@/helpers/getBaseUrlHelper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => `/services`,
    }),
    getUsers: builder.query({
      query: () => `/users`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetServicesQuery, useGetUsersQuery } = api;
