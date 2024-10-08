import React, { FC } from "react";
import scss from "./BurgerMenu.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useGetMeQuery } from "@/redux/api/me";
import { usePathname } from "next/navigation";
import { useHeaderStore } from "@/stores/UseHeaderStore";

const BurgerMenu = () => {
  const pathname = usePathname();
  const { data: session } = useGetMeQuery();
  const { isOpenBurgerMenu, setIsOpenBurgerMenu, login, logout, links } =
    useHeaderStore();

  return (
    <>
      <div
        className={
          isOpenBurgerMenu
            ? `${scss.BurgerMenu} ${scss.active}`
            : `${scss.BurgerMenu}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={scss.content}>
          {session ? (
            <div className={scss.user_profile}>
              <Image
                width={50}
                height={50}
                src={session?.images[1].url! || "/default-image.png"}
                alt="avatar"
              />
              <div className={scss.user_data}>
                <p className={scss.user_name}>{session.display_name}</p>
                <p className={scss.user_email}>{session.email}</p>
              </div>
            </div>
          ) : (
            <>
              <div className={scss.auth_login_buttons}>
                <button className={scss.sign_in_button} onClick={login}>
                  Login
                </button>
              </div>
            </>
          )}
          <nav className={scss.nav}>
            <ul>
              {links.map((item, index) => (
                <li key={index}>
                  <Link
                    className={
                      pathname === item.href
                        ? `${scss.link} ${scss.active}`
                        : `${scss.link}`
                    }
                    href={item.href}
                    onClick={() => setIsOpenBurgerMenu(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {session && (
            <div className={scss.auth_logout_buttons}>
              <button className={scss.logout_button} onClick={logout}>
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default BurgerMenu;
