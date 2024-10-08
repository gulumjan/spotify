import { NextResponse } from "next/server";
import querystring from "querystring";

export const GET = async () => {
  const scopes = [
    "ugc-image-upload",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "app-remote-control",
    "streaming",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-private",
    "playlist-modify-public",
    "user-follow-modify",
    "user-follow-read",
    "user-read-playback-position",
    "user-top-read",
    "user-read-recently-played",
    "user-library-modify",
    "user-library-read",
    "user-read-email",
    "user-read-private",
  ].join(" ");

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  const queryParams = querystring.stringify({
    response_type: "code",
    client_id: clientId,
    scope: scopes,
    redirect_uri: redirectUri,
  });

  const url = `https://accounts.spotify.com/authorize?${queryParams}`;
  return NextResponse.redirect(url);
};
