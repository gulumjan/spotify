import { api as index } from "..";
import { PLAYLIST } from "./types";
const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getPlaylist: builder.query<
      PLAYLIST.GetPlayListResponse,
      PLAYLIST.GetPlayListRequest
    >({
      query: () => ({
        url: `/me/playlists`,
        method: "GET",
        params: {
          limit: 10,
        },
      }),
      providesTags: ["playlist"],
    }),
    getPlaylistById: builder.query<
      PLAYLIST.GetPlayListByIdResponse,
      PLAYLIST.GetPlayListByIdRequest
    >({
      query: (playlist_id) => ({
        url: `/playlists/${playlist_id}`,
        method: "GET",
        params: {},
      }),
      providesTags: ["playlist"],
    }),
    getRecentLyPlayedTracks: builder.query<
      PLAYLIST.RecentlyPlayedTracksResponse,
      PLAYLIST.RecentlyPlayedTracksRequest
    >({
      query: () => ({
        url: "/me/player/recently-played",
        method: "GET",
        params: {
          limit: 7,
        },
      }),
      providesTags: ["playlist"],
    }),
    getUserTopTracks: builder.query<
      PLAYLIST.UserTopTracksResponse,
      PLAYLIST.UserTopTracksRequest
    >({
      query: () => ({
        url: `/me/top/tracks`,
        method: "GET",

        params: {
          limit: 6,
        },
      }),
      providesTags: ["playlist"],
    }),
    getPopularArtists: builder.query<
      PLAYLIST.PopularArtistsResponse,
      PLAYLIST.PopularArrtistsRequest
    >({
      query: () => ({
        url: "/me/top/artists",
        method: "GET",
        params: {
          limit: 6,
        },
      }),
      providesTags: ["playlist"],
    }),
  }),
});

export const {
  useGetPlaylistQuery,
  useGetPlaylistByIdQuery,
  useGetRecentLyPlayedTracksQuery,
  useGetUserTopTracksQuery,
  useGetPopularArtistsQuery,
} = api;
