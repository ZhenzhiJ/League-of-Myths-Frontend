import {
  getRandomChampion,
  getRandomChampionList,
} from "../../../factories/championFactory";
import {
  championReducer,
  deleteChampionActionCreator,
  loadAllChampionsActionCreator,
} from "./championSlice";
import { Champion, ChampionState } from "./types";

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

    describe("When its reducer deleteCharacter is invoked with a payload of 1 character id and the current state", () => {
      test("Then it should return a new statue without the character in the payload", () => {
        const initialState = {
          champions: [],
          champion: {} as Champion,
        };

        const currentChampions = getRandomChampionList(1);
        const randomId = currentChampions[0].id;
        const currentState = {
          champions: currentChampions,
          champion: {} as Champion,
        };

        const action = deleteChampionActionCreator(randomId);

        const newChampionState = championReducer(currentState, action);

        expect(newChampionState).toStrictEqual(initialState);
      });
    });
  });
});
