"use client";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import scss from "./Media.module.scss";
import { useGetMeQuery } from "@/redux/api/me";
import MyPlaylist from "../../shared/MyPlaylist";
import { useState, useEffect } from "react";
import { useGetPlaylistQuery } from "@/redux/api/playlist";
import { useGetAlbumsQuery } from "@/redux/api/albums";
import { MdOutlineExitToApp } from "react-icons/md";
import { useRouter } from "next/navigation";

const Media = () => {
  const { data: session, error: sessionError } = useGetMeQuery();
  const { data: playlists, error: playlistsError } = useGetPlaylistQuery();
  const { currentData: albums, error: albumsError } = useGetAlbumsQuery();
  const [mediaOpen, setMediaOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Fetch data and handle loading/error states
  useEffect(() => {
    setIsLoading(true);
    // ... your data fetching code ...
    setIsLoading(false);
  }, []);

  if (sessionError || playlistsError || albumsError) {
    return <p>Error loading data</p>;
  }

  return (
    <div className={scss.Media}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.media}>
            {/* Corrected Logic for mediaOpen */}
            {mediaOpen ? (
              <>
                <div className={scss.my1}>
                  <MdOutlineExitToApp
                    style={{ fontSize: "30px" }}
                    className={scss.icon}
                    onClick={() => setMediaOpen(false)}
                  />
                </div>
                <div className={scss.playlists}>
                  {playlists &&
                    playlists.items &&
                    playlists.items.map((el) => (
                      <div
                        onClick={() => router.push(`/playlist/${el.id}`)}
                        className={scss.card}
                        key={el.id}
                      >
                        <img
                          src={
                            el.images[0]?.url || "/default_playlist_cover.jpg"
                          }
                          alt={el.name || "Playlist cover"}
                        />
                      </div>
                    ))}
                </div>
                <div className={scss.playlists}>
                  {albums &&
                    albums.items &&
                    albums.items.map((el) => (
                      <div className={scss.card} key={el.album.id}>
                        <img
                          src={
                            el.album.images[0]?.url ||
                            "/default_playlist_cover.jpg"
                          }
                          alt={el.album.name || "Album cover"}
                        />
                      </div>
                    ))}
                </div>
              </>
            ) : (
              <div className={scss.my}>
                <MdOutlineExitToApp
                  style={{ fontSize: "30px" }}
                  className={scss.icon}
                  onClick={() => setMediaOpen(true)}
                />
                <p>My mediateka</p>
                <FaPlus style={{ fontSize: "20px" }} className={scss.icon} />
                <FaArrowRight
                  style={{ fontSize: "20px" }}
                  className={scss.icon}
                />
              </div>
            )}

            {!session ? (
              <div>
                {mediaOpen ? (
                  <h5>Heyy</h5>
                ) : (
                  <>
                    <div className={scss.createPlaylist}>
                      <h5>Создай свой первый плейлист</h5>
                      <h6>Это совсем не сложно ! Мы поможем.</h6>
                      <button>Создать плейлист</button>
                    </div>
                    <div className={scss.createPlaylist}>
                      <h4>Подпишись на интересные подкасты</h4>
                      <h5>Ты будешь узнавать о новых выпусках.</h5>
                      <button>Обзор</button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div>{mediaOpen ? <>Hello</> : <MyPlaylist />}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
