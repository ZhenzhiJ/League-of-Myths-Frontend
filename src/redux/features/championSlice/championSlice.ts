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
  },
});

export const { loadAllChampions: loadAllChampionsActionCreator } =
  championSlice.actions;

export const championReducer = championSlice.reducer;
