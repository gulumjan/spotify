import { api as index } from "..";
import { ME } from "./types";
const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query<ME.GetMeResponse, ME.GetMeRequest>({
      query: () => ({
        url: `/me`,
        method: "GET",
      }),
      providesTags: ["me"],
    }),
  }),
});

export const { useGetMeQuery } = api;
