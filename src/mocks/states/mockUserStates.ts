import { UserState } from "../../redux/features/userSlice/types";

export const mockUserStateLogged: UserState = {
  username: "pokachu",
  id: "63839656464349981a7e1499",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODM5NjU2NDY0MzQ5OTgxYTdlMTQ5OSIsInVzZXJuYW1lIjoicG9rYWNodSIsImlhdCI6MTY3MDI3ODY2MiwiZXhwIjoxNjcwNDUxNDYyfQ.If-mmpBTrTLqrGRQMYbjemRO_Zcns7MarwDHrR-8ico",
  isLogged: true,
};

export const mockUserStateNotLogged: UserState = {
  username: "",
  id: "",
  token: "",
  isLogged: false,
};
