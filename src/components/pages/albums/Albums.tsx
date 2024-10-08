import { useGetAlbumsQuery } from "@/redux/api/albums";
import scss from "./Albums.module.scss";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Albums = () => {
  const { data } = useGetAlbumsQuery();
  // console.log("🚀 ~ Albums ~ data:", data);

  const { setTrackUris, setTrackIndex, trackIndex, trackUris } =
    usePlayerStore();

  const playMusic = (index: number) => {
    const getTrackUris = data?.items.map((item) => item.album.uri);
    setTrackUris(getTrackUris!);
    setTrackIndex(index);
  };

  return (
    <div className={scss.Albums}>
      <div className="container">
        <div className={scss.content}>
          {data?.items.map((el, index) => (
            <div className={scss.albums} key={index}>
              <img src={el.album.images[0].url} alt="" />
              <h5>{el.album.name}</h5>
              <BsFillPlayCircleFill
                onClick={() => playMusic(index)}
                className={scss.play}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Albums;
