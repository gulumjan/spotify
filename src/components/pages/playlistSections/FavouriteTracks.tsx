"use client";
import { useGetUserTopTracksQuery } from "@/redux/api/playlist";
import React, { useState } from "react";
import scss from "./FavouriteTracks.module.scss";
import Image from "next/image";

// @ts-ignore
import { ColorExtractor } from "react-color-extractor";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { useGetMeQuery } from "@/redux/api/me";
const FavouriteTracks = () => {
  const { data } = useGetUserTopTracksQuery("tracks");

  console.log("🚀 ~ FavouriteTracks ~ data:", data);
  const { data: session } = useGetMeQuery();
  const { setTrackUris, setTrackIndex } = usePlayerStore();

  const getTracksUri = () => {
    const uris = data?.items.map((el) => el.uri);
    setTrackUris(uris || []);
  };

  const playMusic = (index: number) => {
    if (data) {
      getTracksUri();
      setTrackIndex(index);
    }
  };

  const imageUrl =
    `https://ih1.redbubble.net/image.1936337660.1726/fpp,small,lustre,wall_texture,product,750x1000.jpg` ||
    "/default_playlist_cover.jpg";
  const [bgColor, setBgColor] = useState("rgb(87, 74, 133)");

  const handleColors = () => {
    setBgColor(imageUrl);
  };

  return (
    <section
      style={{
        background: `linear-gradient(to bottom,rgb(87, 74, 133) , #121212 20%)`,
        // background: ,
      }}
      className={scss.PlaylistItems}
    >
      <div className={scss.playlistHeader}>
        <ColorExtractor getColors={handleColors}>
          <img
            className={scss.playlistImage}
            src={imageUrl}
            alt=""
            width={200}
            height={200}
          />
        </ColorExtractor>
        <div className={scss.playlistInfo}>
          <p>Playlist</p>
          <h1>Favourite Tracks</h1>
          <div className={scss.info}>
            <img src={session?.images[1].url || "/default-image.png"} alt="" />
            <h6>
              {session?.display_name} {data?.items.length} track
            </h6>
          </div>
        </div>
      </div>

      <div className={scss.tracksHeader}>
        <span>#</span>
        <span>Title</span>
        <span>Album</span>
        <span>Duration</span>
      </div>

      <div className={scss.tracksScrollable}>
        {data?.items.map((el, index) => (
          <div
            key={index}
            className={scss.track}
            onClick={() => playMusic(index)}
          >
            <span className={scss.trackIndex}>{index + 1} </span>
            <Image
              className={scss.albumImage}
              width={50}
              height={50}
              src={el.album.images[0].url || "/default_album_cover.jpg"}
              alt="album"
            />
            <div className={scss.trackDetails}>
              <h1>{el.album.name}</h1>
              <p>{el.artists[0].name}</p>
            </div>
            <span className={scss.trackDuration}>
              {Math.floor(el.duration_ms / 60000)}:
              {Math.floor((el.duration_ms % 60000) / 1000)
                .toString()
                .padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FavouriteTracks;
