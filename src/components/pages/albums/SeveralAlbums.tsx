"use client";
import { useGetFeatureBrowserQuery } from "@/redux/api/albums";
import scss from "./SeveralAlbums.module.scss";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { usePlayerStore } from "@/stores/usePlayerStore";

const SeveralAlbums = () => {
  const { data } = useGetFeatureBrowserQuery();
  const { setTrackUris, setTrackIndex, trackIndex, trackUris } =
    usePlayerStore();

  const playMusic = (index: number) => {
    const getTrackUris = data?.playlists.items.map((item) => item.uri);
    setTrackUris(getTrackUris!);
    setTrackIndex(index);
  };

  return (
    <div className={scss.SeveralAlbums}>
      <div className="container">
        <div className={scss.content}>
          {data?.playlists.items.map((el, index) => (
            <div
              onClick={() => playMusic(index)}
              key={index}
              className={scss.playlist}
            >
              <img
                src={el.images[0].url || "/default_playlist_cover.jpg"}
                alt={el.name}
              />
              <h5>{el.name}</h5>
              <BsFillPlayCircleFill className={scss.play} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeveralAlbums;
