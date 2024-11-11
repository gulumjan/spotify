"use client";
import React from "react";
import scss from "./Tracks.module.scss";
import { useParams } from "next/navigation";
import Image from "next/image";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { useSearchTracksQuery } from "@/redux/api/search";

const Tracks = () => {
  const params = useParams();
  const decodeText = decodeURIComponent(String(params.searchQuery));

  const { setTrackUris, setTrackIndex } = usePlayerStore();

  const { data } = useSearchTracksQuery(decodeText);

  const firstTrack = data?.tracks.items[0];

  const playMusic = (index: number) => {
    const getTrackUris = data?.tracks.items.map((item) => item.uri);
    setTrackUris(getTrackUris!);
    setTrackIndex(index);
  };

  return (
    <section className={scss.SearchResults}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.firstTrack}>
            <h1>Best Result</h1>
            <div className={scss.contentt}>
              <Image
                width={70}
                height={70}
                src={firstTrack?.album.images[0].url!}
                alt="photo"
              />
              <h4>{firstTrack?.album.name}</h4>
              <h5>
                <span>Track:</span>
                {firstTrack?.album.artists[0].name}
              </h5>
            </div>
          </div>

          <div className={scss.otherTracks}>
            <h1>Тracks</h1>
            <div className={scss.tracks}>
              {data?.tracks.items.map((item, index) => (
                <div
                  key={item.id}
                  className={scss.track}
                  onClick={() => {
                    playMusic(index);
                  }}
                >
                  <Image
                    width={70}
                    height={70}
                    src={item.album.images[0].url!}
                    alt="photo"
                  />
                  <div className={scss.text}>
                    <h4>{item?.album.name}</h4>
                    <h5>{item?.album.artists[0].name}</h5>
                  </div>
                  <h6>
                    {new Date(item.duration_ms).toISOString().substr(14, 5)}
                  </h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
