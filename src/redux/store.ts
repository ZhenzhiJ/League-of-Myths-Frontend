import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { championReducer } from "./features/championSlice/championSlice";
import { uiReducer } from "./features/uiSlice/uiSlice";
import { userReducer } from "./features/userSlice/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    uiModal: uiReducer,
    champion: championReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
