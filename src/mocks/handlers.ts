import { rest } from "msw";
import {
  UserCredentials,
  UserRegisterCredentials,
} from "../hooks/useUser/types";
import userRoutes from "../hooks/useUser/userRoutes";

const { registerRoute, usersRoute, loginRoute } = userRoutes;
const apiUrl = process.env.REACT_APP_API_URL;

const handlers = [
  rest.post(`${apiUrl}${usersRoute}${registerRoute}`, async (req, res, ctx) => {
    const user = await req.json<UserRegisterCredentials>();

    if (user.email === "pokachu@pokamon.com") {
      return res(
        ctx.status(409),
        ctx.json({ error: "User already registered" })
      );
    }

    return res(ctx.status(201), ctx.json({ user }));
  }),

  rest.post(`${apiUrl}${usersRoute}${loginRoute}`, async (req, res, ctx) => {
    const user = await req.json<UserCredentials>();

    if (user.password === "pokemon") {
      return res(
        ctx.status(401),
        ctx.json({ error: "Incorrect username or password" })
      );
    }

    return res(ctx.status(200), ctx.json({ token: "testtoken" }));
  }),
];

export default handlers;
