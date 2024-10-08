import {
  IAlbums,
  IFeatureBrowser,
  IRecommendations,
  ISeveralAlbums,
} from "@/types/schema";

namespace ALBUMS {
  type GetRecommendationsResponse = IRecommendations;
  type GetRecommendationsRequest = void;

  type GetFeatureBrowserResponse = IFeatureBrowser;
  type GetFeatureBrowserRequest = void;

  type GetAlbumsResponse = IAlbums;
  type GetAlbumsRequest = void;
}
