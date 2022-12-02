import { configureStore } from "@reduxjs/toolkit";
import { championReducer } from "../../redux/features/championSlice/championSlice";
import { uiReducer } from "../../redux/features/uiSlice/uiSlice";
import { userReducer } from "../../redux/features/userSlice/userSlice";
import { store } from "../../redux/store";
import { mockUserStateNotLogged } from "../states/mockUserStates";

const mockInitialStore: typeof store = configureStore({
  reducer: {
    user: userReducer,
    uiModal: uiReducer,
    champion: championReducer,
  },
  preloadedState: {
    user: mockUserStateNotLogged,
  },
});

export default mockInitialStore;
