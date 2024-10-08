"use client";
import { useParams } from "next/navigation";
import scss from "./PlaylistItems.module.scss";
import { useGetPlaylistByIdQuery } from "@/redux/api/playlist";
import { usePlayerStore } from "@/stores/usePlayerStore";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { IoMdPlayCircle } from "react-icons/io";
//@ts-ignore
import { ColorExtractor } from "react-color-extractor";
import { BsThreeDots } from "react-icons/bs";
import { useChangeItemsStore } from "@/stores/useChangeItems";
import { useChangePlaylistItemsMutation } from "@/redux/api/change";
import { toast } from "react-toastify";

const PlaylistItems = () => {
  const params = useParams();
  const { data } = useGetPlaylistByIdQuery(String(params.playlistId));
  const { setTrackUris, setTrackIndex } = usePlayerStore();
  const {
    setIsOpenChangeItems,
    isOpenChangeItems,
    playlistName,
    setPlaylistName,
    description,
    setDescription,
  } = useChangeItemsStore();
  const modalRef = useRef(null);

  const [changePlaylistItems, { isLoading }] = useChangePlaylistItemsMutation();
  const [bgColor, setBgColor] = useState("#fff");

  useEffect(() => {
    if (data) {
      setPlaylistName(data.name || "");
      setDescription(data.description || "");
    }
  }, [data, setPlaylistName, setDescription]);

  const totalDurationMinutes = data
    ? Math.floor(
        data.tracks.items.reduce(
          (total, item) => total + item.track.duration_ms,
          0
        ) / 60000
      )
    : 0;

  const getTracksUri = () => {
    const uris = data?.tracks.items.map((el) => el.track.uri);
    setTrackUris(uris || []);
  };

  const playMusic = (index: number) => {
    if (data) {
      getTracksUri();
      setTrackIndex(index);
    }
  };

  const imageUrl = data?.images[0]?.url || "/default_playlist_cover.jpg";

  const handleColors = (colors: string[]) => {
    if (colors.length > 0) {
      setBgColor(colors[0]);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpenChangeItems(false);
    }
  };

  useEffect(() => {
    if (isOpenChangeItems) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenChangeItems]);

  const handleUpdatePlaylist = async () => {
    try {
      await changePlaylistItems({
        playlist_id: String(params.playlistId),
        body: {
          name: playlistName,
          public: true,
          collaborative: false,
          description: description,
        },
      });

      setIsOpenChangeItems(false);
      toast.success("Playlist updated successfully!");
    } catch (error) {
      console.error("Failed to update playlist:", error);
      toast.error("Failed to update playlist.");
    }
  };

  return (
    <section
      style={{
        background: `linear-gradient(to bottom, ${bgColor}, #121212 30%)`,
      }}
      className={scss.PlaylistItems}
    >
      <div className={scss.playlistHeader}>
        <ColorExtractor getColors={handleColors}>
          <img
            className={scss.playlistImage}
            src={imageUrl}
            alt={data?.name || "Playlist cover"}
            width={200}
            height={200}
          />
        </ColorExtractor>
        <div className={scss.playlistInfo}>
          <h1>{playlistName}</h1>
          <p>Playlist by {data?.owner?.display_name}</p>
          <p>{data?.tracks?.total} tracks</p>
        </div>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", gap: "12px" }}
        className={scss.icons}
      >
        <IoMdPlayCircle
          onClick={() =>
            playMusic(Number(data?.tracks.items[0].track.album.id))
          }
          style={{ fontSize: "64px", color: "#1db954" }}
        />
        <BsThreeDots
          onClick={() => setIsOpenChangeItems(true)}
          style={{ fontSize: "34px" }}
        />
      </div>

      {isOpenChangeItems && (
        <div className={scss.modalOverlay}>
          <div ref={modalRef} className={scss.modalContent}>
            <Image src={data?.images[0].url!} width={200} height={200} alt="" />
            <div className={scss.inps}>
              <input
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
                className={scss.name}
                type="text"
              />
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add a description (optional)"
                className={scss.descr}
                type="text"
              />
              <button onClick={handleUpdatePlaylist} disabled={isLoading}>
                {isLoading ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={scss.tracksHeader}>
        <span>#Title</span>
        <span>Album</span>
        <span>Duration</span>
      </div>

      <div className={scss.tracksScrollable}>
        {data?.tracks?.items?.map((el, index) => (
          <div
            key={index}
            className={scss.track}
            onClick={() => playMusic(index)}
          >
            <div>
              <span className={scss.trackIndex}>{index + 1}</span>
              <Image
                className={scss.albumImage}
                width={50}
                height={50}
                src={
                  el.track.album.images[0]?.url || "/default_album_cover.jpg"
                }
                alt="album"
              />
            </div>
            <div className={scss.trackDetails}>
              <h1>{el.track.name}</h1>
              <p>{el.track.album.name}</p>
            </div>
            <span className={scss.trackDuration}>
              {Math.floor(el.track.duration_ms / 60000)}:
              {Math.floor((el.track.duration_ms % 60000) / 1000)
                .toString()
                .padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlaylistItems;
