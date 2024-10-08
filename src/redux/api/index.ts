import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import axios from "axios";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_SPOTIFY_API_URL}/v1`,
  prepareHeaders: async (headers) => {
    try {
      const { data } = await axios.get(`/api/auth/get-access-token`);
      if (data) {
        headers.set("Authorization", `Bearer ${data}`);
      }
    } catch (error) {
      console.error("Failed to get access token:", error);
    }
    return headers;
  },
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
  try {
    const result = await baseQuery(args, api, extraOptions);
    return result;
  } catch (error: any) {
    return { error: { status: error?.status, message: error?.message } };
  }
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["me", "search", "playlist", "categories", "albums", "change"],
  endpoints: () => ({}),
});
