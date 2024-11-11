"use client";
import { FC } from "react";
import SpotifyWebPlayer from "react-spotify-web-playback";
import { FaVolumeHigh } from "react-icons/fa6";
import FooterMenu from "@/components/pages/footer-menu/FooterMenu";
import scss from "./Footer.module.scss";
import { usePlayerStore } from "@/stores/usePlayerStore";

const Footer: FC = () => {
  const {
    accessToken,
    trackUris,
    trackIndex,
    currentTrack,
    setAccessToken,
    setTrackIndex,
    setCurrentTrack,
  } = usePlayerStore();

  return (
    <div className={scss.Footer}>
      <div className={scss.content}>
        <footer>
          <div className={scss.spotifyPlayer}>
            <FaVolumeHigh className={scss.volume} />
            <h4>
              {currentTrack
                ? `${currentTrack.name} by ${currentTrack.artist}`
                : "No track playing"}
            </h4>
          </div>
          <SpotifyWebPlayer
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
        </footer>
      </div>
      <FooterMenu /> {/* Displays icons as shown in the screenshot */}
    </div>
  );
};

export default Footer;
