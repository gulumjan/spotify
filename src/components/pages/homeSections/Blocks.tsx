"use client";

import {
  useGetRecentLyPlayedTracksQuery,
  useGetUserTopTracksQuery,
} from "@/redux/api/playlist";
import scss from "./Blocks.module.scss";
import { useRouter } from "next/navigation";
import { usePlayerStore } from "@/stores/usePlayerStore";
import Image from "next/image";

const Blocks = () => {
  const { data } = useGetRecentLyPlayedTracksQuery();
  const { currentData } = useGetUserTopTracksQuery("tracks");
  const router = useRouter();

  const { setTrackUris, setTrackIndex, trackIndex, trackUris } =
    usePlayerStore();

  const playMusic = (index: number) => {
    const getTrackUris = data?.items.map((item) => item.track.uri);
    setTrackUris(getTrackUris!);
    setTrackIndex(index);
  };
  return (
    <div className={scss.Blocks}>
      <div className="container">
        <div className={scss.content}>
          <div onClick={() => router.push("/favourite")} className={scss.block}>
            <img
              src="https://ih1.redbubble.net/image.1936337660.1726/fpp,small,lustre,wall_texture,product,750x1000.jpg"
              alt=""
            />
            <div className={scss.text}>
              <h4>Favourite Tracks</h4>
              <p>Playlist : {currentData?.items.length} track</p>
            </div>
          </div>
          {data && (
            <>
              {" "}
              {data?.items.slice(3).map((el, index) => (
                <div
                  onClick={() => playMusic(index)}
                  className={scss.block}
                  key={index}
                >
                  <Image
                    width={35}
                    height={35}
                    src={
                      el?.track?.album?.images?.[0]?.url ||
                      "/default_playlist_cover.jpg"
                    }
                    alt=""
                  />
                  <div className={scss.text}>
                    <h4>{el.track.album.name.slice(0, 10)}</h4>
                    <p>{el.track.artists[0].name}</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blocks;
