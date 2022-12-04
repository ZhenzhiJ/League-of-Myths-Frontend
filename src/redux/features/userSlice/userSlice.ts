import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./types";

export const initialUserState: UserState = {
  username: "",
  id: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (currentUser, action: PayloadAction<User>) => ({
      ...action.payload,
      isLogged: true,
    }),

    logoutUser: (currentUser) => ({
      ...initialUserState,
    }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
