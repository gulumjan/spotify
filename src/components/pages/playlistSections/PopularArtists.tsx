"use client";
import { useGetPopularArtistsQuery } from "@/redux/api/playlist";
import scss from "./PopularArtists.module.scss";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { usePlayerStore } from "@/stores/usePlayerStore";

const PopularArtists = () => {
  const { data } = useGetPopularArtistsQuery();
  const { setTrackUris, setTrackIndex, trackIndex } = usePlayerStore();

  const playMusic = (index: number) => {
    // Ensure we have a valid data and index
    if (data?.items && index < data.items.length) {
      // Map over the items to get track URIs
      const getTrackUris = data.items.map((item) => item.uri);
      setTrackUris(getTrackUris); // Set the track URIs
      setTrackIndex(index); // Set the index of the track to be played
    }
  };

  return (
    <div className={scss.PopularArtists}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.cards}>
            {data?.items.map((el, index) => (
              <div
                onClick={() => playMusic(index)} // Use index directly
                className={scss.card}
                key={el.id} // Use a unique key if available
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
