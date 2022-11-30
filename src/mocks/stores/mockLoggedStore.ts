import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "../../redux/features/uiSlice/uiSlice";
import { userReducer } from "../../redux/features/userSlice/userSlice";
import { store } from "../../redux/store";
import { mockUserStateLogged } from "../states/mockUserStates";

const mockInitialStore: typeof store = configureStore({
  reducer: {
    user: userReducer,
    uiModal: uiReducer,
  },
  preloadedState: {
    user: mockUserStateLogged,
  },
});

export default mockInitialStore;
