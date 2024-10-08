import { create } from "zustand";

interface IChangeItems {
  isOpenChangeItems: boolean;
  setIsOpenChangeItems: (isOpenChangeItems: boolean) => void;
  playlistName: string;
  setPlaylistName: (playlistName: string) => void;
  description: string;
  setDescription: (description: string) => void;
}

export const useChangeItemsStore = create<IChangeItems>((set) => ({
  isOpenChangeItems: false,
  setIsOpenChangeItems: (isOpenChangeItems) =>
    set(() => ({ isOpenChangeItems })),
  playlistName: "",
  setPlaylistName: (playlistName) => set(() => ({ playlistName })),
  description: "",
  setDescription: (description) => set(() => ({ description })),
}));
