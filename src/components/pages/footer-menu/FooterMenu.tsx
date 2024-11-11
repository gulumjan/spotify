"use client";
import { FC } from "react";
import { FaHome, FaSearch, FaSpotify } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import scss from "./FooterMenu.module.scss";
import { useRouter } from "next/navigation";

const FooterMenu: FC = () => {
  const router = useRouter();
  return (
    <section className={scss.FooterMenu}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.menuItem}>
            <FaHome onClick={() => router.push(`/`)} className={scss.icon} />
            <span>Главная</span>
          </div>
          <div onClick={() => router.push(`/search`)} className={scss.menuItem}>
            <FaSearch className={scss.icon} />
            <span>Поиск</span>
          </div>
          <div className={scss.menuItem}>
            <MdLibraryMusic className={scss.icon} />
            <span>Моя медиатека</span>
          </div>
          <div
            onClick={() => router.push(`https://open.spotify.com/`)}
            className={scss.menuItem}
          >
            <FaSpotify className={scss.icon} />
            <span>Скачать приложение</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterMenu;
