import {
  getRandomChampion,
  getRandomChampionList,
} from "../../../factories/championFactory";
import {
  championReducer,
  loadAllChampionsActionCreator,
} from "./championSlice";
import { ChampionState } from "./types";

const initialChampionState: ChampionState = {
  champions: [],
};

describe("Given a championReducer", () => {
  describe("And it's invoked", () => {
    describe("When it receives an unknow action with the initial state", () => {
      test("Then it should return the same state", () => {
        const unknownAction = {
          type: "unknown",
        };

        const newChampionState = championReducer(
          initialChampionState,
          unknownAction
        );

        expect(newChampionState).toStrictEqual(initialChampionState);
      });
    });

    describe("When its reducer getAllChampions is invoked with a payload of 2 champions and a initial state", () => {
      test("Then it should return a new state with the received 2 champions", () => {
        const newChampions = getRandomChampionList(2);

        const newState = championReducer(
          initialChampionState,
          loadAllChampionsActionCreator(newChampions)
        );

        expect(newState).toStrictEqual({ champions: newChampions });
      });
    });

    describe("When its reducer getAllCharacters is invoked with a payload of 1 character and a initial state", () => {
      test("Then it should return a new state of 1 champion", () => {
        const newChampion = [getRandomChampion()];

        const newState = championReducer(
          initialChampionState,
          loadAllChampionsActionCreator(newChampion)
        );

        expect(newState).toStrictEqual({ champions: newChampion });
      });
    });
  });
});
