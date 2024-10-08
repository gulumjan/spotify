import {
  iMePlaylist,
  IPlaylistById,
  IPopularArtists,
  IRecentlyPlayedTracks,
  IUserTopTracks,
} from "@/types/schema";

namespace PLAYLIST {
  type GetPlayListResponse = iMePlaylist;
  type GetPlayListRequest = void;

  type GetPlayListByIdResponse = IPlaylistById;
  type GetPlayListByIdRequest = string;

  type RecentlyPlayedTracksRequest = void;
  type RecentlyPlayedTracksResponse = IRecentlyPlayedTracks;

  type UserTopTracksResponse = IUserTopTracks;
  type UserTopTracksRequest = string;

  type PopularArtistsResponse = IPopularArtists;
  type PopularArrtistsRequest = void;
}
