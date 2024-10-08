import { api as index } from "..";
import { CHANGE } from "./type";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    changePlaylistItems: builder.mutation<
      CHANGE.ChangePlaylistItemsResponse,
      {
        playlist_id: CHANGE.PlaylistId;
        body: CHANGE.ChangePlaylistItemsRequest;
      }
    >({
      query: ({ playlist_id, body }) => ({
        url: `/playlists/${playlist_id}`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["change"],
    }),
  }),
});

export const { useChangePlaylistItemsMutation } = api;
