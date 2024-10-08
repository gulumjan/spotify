"use client";
import React, { useState } from "react";
import scss from "./Playlist.module.scss";
import RecentlyPlayed from "../playlistSections/RecentlyPlayed";
import PopularArtists from "../playlistSections/PopularArtists";
import SeveralAlbums from "../albums/SeveralAlbums";
import AlbumPage from "../albums/Albums";
import Blocks from "./Blocks";

const PlayList = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className={scss.PlayList}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.allMusic}>
            <div className={scss.btns}>
              <button
                className={activeTab === "all" ? "active" : ""}
                onClick={() => setActiveTab("all")}
              >
                All
              </button>
              <button
                className={activeTab === "music" ? "active" : ""}
                onClick={() => setActiveTab("music")}
              >
                Tracks
              </button>
            </div>
            <Blocks />
            <div className={scss.tracks}>
              <RecentlyPlayed />
              <h1>Popular Performers</h1>
              <PopularArtists />
              <h1>Sounds like something i heard recently</h1>
              <SeveralAlbums />
              <h1>Popular Albums</h1>
              <AlbumPage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayList;
