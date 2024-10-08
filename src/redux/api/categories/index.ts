import { api as index } from "..";
import { CATEGORIES } from "./types";
const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<
      CATEGORIES.getCategoriesResponse,
      CATEGORIES.getCategoriesRequest
    >({
      query: () => ({
        url: `/browse/categories`,
        method: "GET",
      }),
      providesTags: ["categories"],
    }),
  }),
});

export const { useGetCategoriesQuery } = api;
