"use client";
import React, { useState } from "react";
import scss from "./ProfilePage.module.scss";
import { useGetMeQuery } from "@/redux/api/me";

// @ts-ignore
import { ColorExtractor } from "react-color-extractor";
import { useGetPlaylistQuery } from "@/redux/api/playlist";
import PopularArtists from "./playlistSections/PopularArtists";
import SeveralAlbums from "./albums/SeveralAlbums";

const ProfilePage = () => {
  const { data: session } = useGetMeQuery();
  const { data } = useGetPlaylistQuery();
  const imageUrl = session?.images[1].url || "/default_playlist_cover.jpg";
  const [bgColor, setBgColor] = useState("#fff");

  const handleColors = (colors: string[]) => {
    if (colors.length > 0) {
      setBgColor(colors[0]);
    }
  };

  return (
    <section
      style={{
        background: `linear-gradient(to bottom,#778899, #121212 50%)`,
        // background: ` linear-gradient(180deg, #535353 0%, #3E3E3E 10%)`,
      }}
      className={scss.PlaylistItems}
    >
      <div className={scss.playlistHeader}>
        <ColorExtractor getColors={handleColors}>
          <img
            className={scss.playlistImage}
            src={imageUrl}
            alt={session?.display_name || "Playlist cover"}
            width={200}
            height={200}
          />
        </ColorExtractor>
        <div className={scss.playlistInfo}>
          <p style={{ textAlign: "center" }}>Profile</p>
          <h1>{session?.display_name}</h1>
          <p>{data?.items.length} open playlists</p>
        </div>
      </div>
      <h1>Popular Performes in this month</h1>
      <p style={{ padding: "15px 0" }}>Visible only for you</p>
      <PopularArtists />
      <h1>Popular Albums</h1>
      <SeveralAlbums />
    </section>
  );
};

export default ProfilePage;
