"use client";
import scss from "./ProfileButton.module.scss";
import { useGetMeQuery } from "@/redux/api/me";
import { useHeaderStore } from "@/stores/UseHeaderStore";
import Image from "next/image";

const ProfileButton = () => {
  const { data: session } = useGetMeQuery();
  const { isOpenProfileMenu, setIsOpenProfileMenu } = useHeaderStore();

  return (
    <div
      className={scss.ProfileButton}
      onClick={(e) => {
        e.stopPropagation();
        setIsOpenProfileMenu(!isOpenProfileMenu);
      }}
    >
      <div className={scss.content}>
        <Image
          width={50}
          height={50}
          src={session?.images[1].url! || "/default-image.png"}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default ProfileButton;
