import { rest } from "msw";
import championRoutes from "../hooks/useChampion/championRoutes";
import {
  UserCredentials,
  UserRegisterCredentials,
} from "../hooks/useUser/types";
import userRoutes from "../hooks/useUser/userRoutes";
import { testChampionsList } from "./testChampionsList";

const { registerRoute, usersRoute, loginRoute } = userRoutes;
const { champions, createChampionRoute } = championRoutes;
const { id: idChampion } = testChampionsList[1];
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

  rest.get(`${apiUrl}${champions}`, async (req, res, ctx) => {
    return res.once(
      ctx.status(200),
      ctx.json({ allChampions: testChampionsList })
    );
  }),

  rest.get(`${apiUrl}${champions}/my-champions`, async (req, res, ctx) => {
    return res.once(
      ctx.status(200),
      ctx.json({ myUserChampions: testChampionsList })
    );
  }),

  rest.get(`${apiUrl}${champions}`, async (req, res, ctx) => {
    return res.once(
      ctx.status(500),
      ctx.json({ error: "Something goes wrong. Try again" })
    );
  }),

  rest.delete(
    `${apiUrl}${champions}/delete/${idChampion}`,
    async (req, res, ctx) => {
      return res.once(ctx.status(200));
    }
  ),

  rest.post(
    `${apiUrl}${champions}${createChampionRoute}`,
    async (req, res, ctx) => {
      return res.once(
        ctx.status(200),
        ctx.json({ text: "Character created!" })
      );
    }
  ),

  rest.post(
    `${apiUrl}${champions}${createChampionRoute}`,
    async (req, res, ctx) => {
      return res.once(
        ctx.status(500),
        ctx.json({ error: "Character cannot be created!" })
      );
    }
  ),
];

export default handlers;
