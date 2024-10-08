"use client";
import React from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { LuPanelRightClose } from "react-icons/lu";
import scss from "./Media.module.scss";
import { useGetMeQuery } from "@/redux/api/me";
import MyPlaylist from "../../shared/MyPlaylist";

const Media = () => {
  const { data } = useGetMeQuery();
  return (
    <div className={scss.Media}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.media}>
            <div className={scss.my}>
              <LuPanelRightClose
                style={{ fontSize: "30px" }}
                className={scss.icon}
              />
              <p>My mediateka</p>
              <FaPlus style={{ fontSize: "20px" }} className={scss.icon} />
              <FaArrowRight
                style={{ fontSize: "20px" }}
                className={scss.icon}
              />
            </div>
            {!data ? (
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
            ) : (
              <>
                <MyPlaylist />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
