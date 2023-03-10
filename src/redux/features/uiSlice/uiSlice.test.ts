import { UiState } from "./types";
import {
  closeModalActionCreator,
  openModalActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given closeModalReducer", () => {
  describe("When it recieves an initial state with showModal true and a closeModalActionCreator'", () => {
    const mockUiState: UiState = {
      isError: false,
      modalText: "",
      showModal: true,
    };

    test("Then it should return a new state with showModal false", () => {
      const expectedUiState: UiState = {
        ...mockUiState,
        showModal: false,
      };

      const newUiState = uiReducer(mockUiState, closeModalActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});

describe("Given openModalReducer", () => {
  describe("When it recieves an initial state and a payload isError true and the text 'Error'", () => {
    const mockUiState: UiState = {
      isError: false,
      modalText: "",
      showModal: false,
    };

    test("Then it should return a new state with the modal's isError true and modal text 'Error'", () => {
      const actionPayload = {
        isError: true,
        modalText: "Error",
      };
      const initialUiState: UiState = {
        ...mockUiState,
      };
      const expectedUiState: UiState = {
        showModal: true,
        modalText: actionPayload.modalText,
        isError: actionPayload.isError,
      };

      const newUiState = uiReducer(
        initialUiState,
        openModalActionCreator(actionPayload)
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
