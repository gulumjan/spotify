"use client";
import React, { useEffect } from "react";
import scss from "./Footer.module.scss";
import SpotifyWebPlayer from "react-spotify-web-playback";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { FaVolumeHigh } from "react-icons/fa6";
import axios from "axios";

const Footer = () => {
  const {
    accessToken,
    trackUris,
    trackIndex,
    setAccessToken,
    setTrackIndex,
    setCurrentTrack,
    currentTrack,
  } = usePlayerStore();

  const fetchAccessToken = async () => {
    try {
      const { data } = await axios.get(`/api/auth/get-access-token`);
      setAccessToken(data);
    } catch (error) {
      console.error("Error fetching access token:", error);
    }
  };

  useEffect(() => {
    fetchAccessToken();
  }, []);

  return (
    <div className={scss.Footer}>
      <div className={scss.content}>
        <footer className={scss.footer}>
          {window.location.href !== "/" &&
          window.location.href !== "/profile" ? (
            <>
              <SpotifyWebPlayer
                callback={(state) => {
                  if (state.isPlaying && state.track) {
                    const track = state.track;
                    setCurrentTrack({
                      name: track.name,
                      artist: track.artists
                        .map((artist: any) => artist.name)
                        .join(", "),
                      albumImage: track.image,
                    });
                  }

                  if (!state.isPlaying) {
                    setTrackIndex(null);
                  }

                  if (state.error) {
                    console.error("Spotify playback error:", state.error);
                  }
                }}
                token={accessToken}
                uris={trackUris}
                play={trackIndex !== null}
                offset={trackIndex!}
                styles={{
                  activeColor: "#fff",
                  bgColor: "#000",
                  color: "#fff",
                  loaderColor: "#fff",
                  sliderColor: "#1cb954",
                  trackArtistColor: "#ccc",
                  trackNameColor: "#fff",
                }}
              />
              <div className={scss.linear}>
                <h4>
                  <FaVolumeHigh className={scss.volume} />{" "}
                  {currentTrack
                    ? `Playing: ${currentTrack.name} by ${currentTrack.artist}`
                    : "No track playing"}
                </h4>
              </div>
            </>
          ) : (
            <></>
          )}
        </footer>
      </div>
    </div>
  );
};

export default Footer;
