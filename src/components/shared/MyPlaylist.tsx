"use client";
import scss from "./MyPlaylist.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  useGetPlaylistQuery,
  useGetUserTopTracksQuery,
} from "@/redux/api/playlist";
import { useGetMeQuery } from "@/redux/api/me";

const Playlist = () => {
  const { data } = useGetPlaylistQuery();
  const { currentData } = useGetUserTopTracksQuery("tracks");
  const { data: session } = useGetMeQuery();
  const router = useRouter();

  return (
    <div className={scss.MyPlaylist}>
      <div className="content">
        <div className={scss.content}>
          <div className={scss.Blocks}>
            {data ? (
              <>
                {data.items.map((el, index) => (
                  <div
                    className={scss.block}
                    key={index}
                    onClick={() => {
                      router.push(`/playlist/${el.id}`);
                    }}
                  >
                    <Image
                      width={50}
                      height={50}
                      src={el.images[0].url}
                      alt=""
                    />
                    <div className={scss.text}>
                      <h4>{el.name}</h4>
                      <p>Playlist : {session?.display_name}</p>
                    </div>
                  </div>
                ))}
                <div
                  onClick={() => router.push("/favourite")}
                  className={scss.block}
                >
                  <img
                    src="https://ih1.redbubble.net/image.1936337660.1726/fpp,small,lustre,wall_texture,product,750x1000.jpg"
                    alt=""
                  />
                  <div className={scss.text}>
                    <h4>Favourite Tracks</h4>
                    <p>Playlist : {currentData?.items.length} track</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p>Playlists are not exist</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
