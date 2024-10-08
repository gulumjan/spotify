import { api as index } from "..";
import { ALBUMS } from "./types";
const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getRecommendations: builder.query<
      ALBUMS.GetRecommendationsResponse,
      ALBUMS.GetRecommendationsRequest
    >({
      query: (query) => ({
        url: `/recommendations`,
        method: "GET",

        params: {
          q: query,
          limit: 6,
          type: "tracks",
        },
      }),
      providesTags: ["albums"],
    }),
    getFeatureBrowser: builder.query<
      ALBUMS.GetFeatureBrowserResponse,
      ALBUMS.GetFeatureBrowserRequest
    >({
      query: (query) => ({
        url: `/browse/featured-playlists`,
        method: "GET",

        params: {
          q: query,
          limit: 6,
          type: "playlist",
        },
      }),
      providesTags: ["albums"],
    }),
    getAlbums: builder.query<ALBUMS.GetAlbumsResponse, ALBUMS.GetAlbumsRequest>(
      {
        query: () => ({
          url: `/me/albums`,
          method: "GET",
          params: {
            limit: 6,
          },
        }),
        providesTags: ["albums"],
      }
    ),
  }),
});

export const {
  useGetRecommendationsQuery,
  useGetFeatureBrowserQuery,
  useGetAlbumsQuery,
} = api;
