import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Champion, ChampionState } from "./types";

const initialState: ChampionState = {
  champions: [],
};

const championSlice = createSlice({
  name: "champions",
  initialState,
  reducers: {
    loadAllChampions: (
      currentChampions,
      action: PayloadAction<Champion[]>
    ) => ({
      ...currentChampions,
      champions: action.payload,
    }),

    deleteChampion: (currentChampion, action: PayloadAction<string>) => ({
      ...currentChampion,
      champions: currentChampion.champions.filter(
        (champion) => champion.id !== action.payload
      ),
    }),
  },
});

export const {
  loadAllChampions: loadAllChampionsActionCreator,
  deleteChampion: deleteChampionActionCreator,
} = championSlice.actions;

export const championReducer = championSlice.reducer;
