"use client";
import { useGetPopularArtistsQuery } from "@/redux/api/playlist";
import scss from "./PopularArtists.module.scss";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { usePlayerStore } from "@/stores/usePlayerStore";

const PopularArtists = () => {
  const { data } = useGetPopularArtistsQuery();
  const { setTrackUris, setTrackIndex, trackIndex } = usePlayerStore();

  const playMusic = (index: number) => {
    if (data?.items && index < data.items.length) {
      const getTrackUris = data.items.map((item) => item.uri);
      setTrackUris(getTrackUris);
      setTrackIndex(index);
    }
  };

  return (
    <div className={scss.PopularArtists}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.cards}>
            {data?.items.map((el, index) => (
              <div
                onClick={() => playMusic(index)}
                className={scss.card}
                key={el.id}
              >
                <img
                  src={el.images[1]?.url || "/default-image.png"}
                  width={100}
                  height={200}
                  alt={el.name}
                />
                <h4>{el.name}</h4>
                <p>Executor</p>
                <BsFillPlayCircleFill className={scss.play} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularArtists;
