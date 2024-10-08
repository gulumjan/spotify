import { create } from "zustand";

interface IPlayerStore {
	accessToken: string;
	setAccessToken: (accessToken: string) => void;

	trackUris: string[];
	setTrackUris: (uris: string[]) => void;

	trackIndex: number | null;
	setTrackIndex: (index: number | null) => void;

	currentTrack: {
		name: string;
		artist: string;
		albumImage: string;
	} | null;
	setCurrentTrack: (track: {
		name: string;
		artist: string;
		albumImage: string;
	}) => void;
}

export const usePlayerStore = create<IPlayerStore>((set) => ({
	accessToken: "",
	setAccessToken: (accessToken) => set({ accessToken }),

	trackUris: [],
	setTrackUris: (uris) => set({ trackUris: uris }),

	trackIndex: null,
	setTrackIndex: (index) => set({ trackIndex: index }),

	currentTrack: null,
	setCurrentTrack: (track) => set({ currentTrack: track }),
}));
