"use client";
import scss from "./Header.module.scss";
import Link from "next/link";
import { FaBell, FaDownload, FaSpotify } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { useGetMeQuery } from "@/redux/api/me";
import ProfileButton from "@/components/ui/profileButton/ProfileButton";
import ProfileMenu from "@/components/ui/profileMenu/ProfileMenu";
import { useEffect, useState } from "react";
import BurgerButton from "@/components/ui/burgerButton/BurgerButton";
import BurgerMenu from "@/components/ui/burgerMenu/BurgerMenu";
import LookForTracks from "@/components/shared/LookForTracks";
import { useHeaderStore } from "@/stores/UseHeaderStore";
import { useRouter } from "next/navigation";
import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
const Header = () => {
  const { data: session } = useGetMeQuery();
  const { login } = useHeaderStore();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Link style={{ gap: "8px" }} href="/">
              <FaSpotify />
              <p>Spotify</p>
            </Link>
          </div>
          <div className={scss.search}>
            <div className={scss.searchInput}>
              <MdHomeFilled
                style={{
                  background: "#51515134",
                  fontSize: "45px",
                  borderRadius: "50%",
                  padding: 7,
                }}
                onClick={() => router.push("/")}
              />
              <form className={scss.search1}>
                <Link href={""}>
                  <IoSearchOutline />
                </Link>
                <LookForTracks />
              </form>
            </div>
          </div>
          <div className={scss.icons_block}>
            <div className={scss.download}>
              <div className={scss.icon_save}>
                <FaDownload /> <span>Install the application</span>
              </div>
              <span className={scss.icon_bell}>
                <FaBell />
              </span>
            </div>
            <div className={scss.auth}>
              {isMobile ? (
                <>
                  <BurgerButton />
                  <BurgerMenu />
                </>
              ) : (
                <>
                  {session ? (
                    <>
                      <ProfileButton />
                      <ProfileMenu />
                    </>
                  ) : (
                    <button onClick={login}>Login</button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
