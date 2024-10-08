import { create } from "zustand";

interface HeaderStore {
  links: {
    name: string;
    href: string;
  }[];

  login: () => void;
  logout: () => void;

  isOpenProfileMenu: boolean;
  setIsOpenProfileMenu: (isOpenProfileMenu: boolean) => void;
  isOpenBurgerMenu: boolean;
  setIsOpenBurgerMenu: (isOpenBurgerMenu: boolean) => void;
}

export const useHeaderStore = create<HeaderStore>((set) => ({
  links: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Profile",
      href: "/profile",
    },
  ],
  login: () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/login`,
      "_self"
    );
  },
  logout: () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/logout`,
      "_self"
    );
  },

  isOpenProfileMenu: false,
  setIsOpenProfileMenu: (isOpenProfileMenu) =>
    set(() => ({ isOpenProfileMenu: isOpenProfileMenu })),
  isOpenBurgerMenu: false,
  setIsOpenBurgerMenu: (isOpenBurgerMenu) =>
    set(() => ({ isOpenBurgerMenu: isOpenBurgerMenu })),
}));
