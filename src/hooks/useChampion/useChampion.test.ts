import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { testChampionsList } from "../../mocks/testChampionsList";
import { loadAllChampionsActionCreator } from "../../redux/features/championSlice/championSlice";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { store } from "../../redux/store";
import ContextWrapper from "../../testUtils/ContextWrapper";
import useChampion from "./useChampion";

beforeEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

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

  describe("When it invokes iasdts function getAllChampions", () => {
    test("Then it should return an array of champions", async () => {
      const {
        result: {
          current: { getAllChampions },
        },
      } = renderHook(() => useChampion(), {
        wrapper: ContextWrapper,
      });

      const actionPayload = {
        isError: true,
        modalText: "Failed to load champions",
      };

      await act(async () => await getAllChampions());

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(actionPayload)
      );
    });
  });
});
