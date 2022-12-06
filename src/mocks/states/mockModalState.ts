import { ChampionState } from "../../redux/features/championSlice/types";
import { UiState } from "../../redux/features/uiSlice/types";
import { UserState } from "../../redux/features/userSlice/types";

export const mockUserInitialState: UserState = {
  username: "",
  id: "",
  token: "",
  isLogged: false,
};

export const mockSuccessFeedback: UiState = {
  showModal: true,
  isError: false,
  modalText: "Errorn't",
};

export const mockErrorFeedback: UiState = {
  showModal: true,
  isError: true,
  modalText: "Error",
};

export const mockChampionInitialstate: ChampionState = {
  champions: [],
};
