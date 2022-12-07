import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { getRandomChampion } from "../../factories/championFactory";
import { testChampionsList } from "../../mocks/testChampionsList";
import {
  deleteChampionActionCreator,
  loadAllChampionsActionCreator,
} from "../../redux/features/championSlice/championSlice";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { store } from "../../redux/store";
import ContextWrapper from "../../testUtils/ContextWrapper";
import LoggedProviderWrapper from "../../testUtils/LoggedProviderWrapper";
import useChampion from "./useChampion";
import mockInitialStore from "../../mocks/stores/mockLoggedStore";

const dispatchSpy = jest.spyOn(store, "dispatch");

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Given the useCharacter custom hook", () => {
  describe("When it invokes its function getAllChampions", () => {
    test("Then it should return an array of champions", async () => {
      const {
        result: {
          current: { getAllChampions },
        },
      } = renderHook(() => useChampion(), {
        wrapper: ContextWrapper,
      });

      await act(async () => await getAllChampions());

      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          loadAllChampionsActionCreator(testChampionsList)
        )
      );
    });
  });

  describe("When it invokes the function getAllChampions and gets an error", () => {
    test("Then it should show an error message", async () => {
      const {
        result: {
          current: { getAllChampions },
        },
      } = renderHook(() => useChampion(), {
        wrapper: ContextWrapper,
      });

      const actionPayload = {
        isError: true,
        modalText: "Failed to load champions.",
      };

      await act(async () => await getAllChampions());

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(actionPayload)
      );
    });
  });

  describe("When it invokes the deleteChampion and it fails to delete", () => {
    test("Then it should throw an error 'Failed to delete champion'", async () => {
      const { id: idChampion } = testChampionsList[0];
      const { result } = renderHook(() => useChampion(), {
        wrapper: ContextWrapper,
      });

      const actionPayload = {
        isError: true,
        modalText: "Failed to delete champion.",
      };

      await result.current.deleteChampion(idChampion);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(actionPayload)
      );
    });
  });

  describe("When it invokes the deleteChampion and its successfull", () => {
    test("Then it should delete the corresponding champion", async () => {
      const { id: idChampion } = testChampionsList[1];
      const { result } = renderHook(() => useChampion(), {
        wrapper: ContextWrapper,
      });

      await result.current.deleteChampion(idChampion);

      expect(dispatchSpy).toHaveBeenCalledWith(
        deleteChampionActionCreator(idChampion)
      );
    });
  });

  describe("When it invokes the function createChampion", () => {
    const createChampionData = getRandomChampion();
    const championFormData = {
      id: createChampionData.id,
      name: createChampionData.name,
      role: createChampionData.role,
      passive: createChampionData.passive,
      abilityQ: createChampionData.abilityQ,
      abilityW: createChampionData.abilityW,
      abilityE: createChampionData.abilityE,
      ultimateR: createChampionData.ultimateR,
      image: createChampionData.image,
      createdBy: "63839656464349981a7e1499",
    };

    describe("and it's invoked with a champion data correctly", () => {
      test("Then it should calls navigate with '/home'", async () => {
        const { result } = renderHook(() => useChampion(), {
          wrapper: LoggedProviderWrapper,
        });

        await result.current.createChampion(championFormData);

        expect(mockedUseNavigate).toHaveBeenCalledWith("/home");
      });
    });

    describe("When it's invoked an axios rejects an error", () => {
      test("Then it should throw an error", async () => {
        const { result } = renderHook(() => useChampion(), {
          wrapper: ContextWrapper,
        });

        const actionPayload = {
          isError: true,
          modalText: "Failed to create champion.",
        };

        await result.current.createChampion(championFormData);

        expect(dispatchSpy).toHaveBeenCalledWith(
          openModalActionCreator(actionPayload)
        );
      });
    });
  });
  describe("When it invokes the function getMyChampions", () => {
    describe("And it receives a token of a logged user", () => {
      const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

      test("Then it should return a list of private champions of the user", async () => {
        const { result } = renderHook(() => useChampion(), {
          wrapper: LoggedProviderWrapper,
        });

        await result.current.getMyChampions();

        expect(dispatchSpy).toHaveBeenCalledWith(
          loadAllChampionsActionCreator(testChampionsList)
        );
      });
    });

    describe("And it failed to load champions", () => {
      const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

      test("Then it should open a modal with a error text", async () => {
        const { result } = renderHook(() => useChampion(), {
          wrapper: LoggedProviderWrapper,
        });

        const actionPayload = {
          isError: true,
          modalText: "Failed to load champions.",
        };

        await result.current.getMyChampions();

        expect(dispatchSpy).toHaveBeenCalledWith(
          openModalActionCreator(actionPayload)
        );
      });
    });
  });
});
