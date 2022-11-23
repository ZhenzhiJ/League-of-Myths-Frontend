import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./types";

const initialState: UserState = {
  username: "",
  id: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (currentUser, action: PayloadAction<User>) => ({
      ...action.payload,
      isLogged: true,
    }),

    logoutUser: (currentUser) => ({
      ...initialState,
    }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
