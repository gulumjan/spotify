"use client";
import { useGetRecentLyPlayedTracksQuery } from "@/redux/api/playlist";
import React from "react";
import scss from "./RecentlyPlayed.module.scss";
import { FaCirclePlay } from "react-icons/fa6";
import Image from "next/image";
import { usePlayerStore } from "@/stores/usePlayerStore";

const RecentlyPlayed = () => {
  const { data } = useGetRecentLyPlayedTracksQuery();
  console.log("🚀 ~ RecentlyPlayed ~ data:", data);
  const { trackIndex, setTrackIndex, setTrackUris } = usePlayerStore();

  const getUniqueTracks = () => {
    const uniqueTracks = data?.items.filter(
      (track, index, self) =>
        index ===
        self.findIndex((t) => t.track.album.name === track.track.album.name)
    );
    return uniqueTracks;
  };

  const getTracksUri = () => {
    const uniqueTracks = getUniqueTracks();
    const uris = uniqueTracks?.map((el) => el.track.uri);
    console.log("Track URIs:", uris);
    setTrackUris(uris || []);
  };

  const playMusic = (index: number) => {
    if (data) {
      getTracksUri();
      setTrackIndex(index);
    }
  };

  return (
    <div className={scss.Tracks}>
      <div className={scss.content}>
        <h1>Recently Listened</h1>
        <div className={scss.cardContent}>
          {getUniqueTracks()?.length ? (
            getUniqueTracks()?.map((el, index) => (
              <div key={index}>
                <div
                  className={
                    index === trackIndex
                      ? `${scss.imageWrapper} ${scss.active}`
                      : `${scss.imageWrapper}`
                  }
                >
                  <Image
                    width={180}
                    height={200}
                    src={el.track.album.images[1]?.url || "/default-image.png"}
                    alt={el.track.album.name}
                    onError={(e) => {
                      e.currentTarget.src = "/default-image.png";
                    }}
                  />
                  <FaCirclePlay
                    onClick={() => playMusic(index)}
                    className={scss.play}
                  />
                </div>
                <h4>{el.track.album.name || "No Album Name"}</h4>
                <p>{el.track.artists[0]?.name || "Unknown Artist"}</p>
              </div>
            ))
          ) : (
            <p>No recently played tracks</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentlyPlayed;
