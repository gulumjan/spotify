"use client";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import scss from "./ProfileMenu.module.scss";
import { useHeaderStore } from "@/stores/UseHeaderStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProfileMenu = () => {
  const { isOpenProfileMenu, logout } = useHeaderStore();
  const title = ["Account", "Profile", "Settings"];
  const router = useRouter();
  return (
    <div
      className={
        isOpenProfileMenu
          ? `${scss.ProfileMenu} ${scss.active}`
          : `${scss.ProfileMenu}`
      }
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className={scss.content}>
        {title.map((el, idx) => (
          <div key={idx} className={scss.text}>
            {el === "Profile" ? (
              // <Link href="/profile">Profile</Link>
              <p onClick={() => router.push("/profile")}>Profile</p>
            ) : (
              <p>{el}</p>
            )}
          </div>
        ))}
        <hr />
        <div className={scss.logout}>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
