import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShowModalActionPayload, UiState } from "./types";

export const initialUiState: UiState = {
  isError: false,
  modalText: "",
  showModal: false,
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    closeModalReducer: (previousUi: UiState) => ({
      ...previousUi,
      showModal: false,
    }),

    openModalReducer: (
      previousUi: UiState,
      action: PayloadAction<ShowModalActionPayload>
    ) => ({
      ...previousUi,
      showModal: true,
      isError: action.payload.isError,
      modalText: action.payload.modalText,
    }),

    showLoading: (currentUiState): UiState => ({
      ...currentUiState,
      isLoading: true,
    }),

    hideLoading: (currentUiState): UiState => ({
      ...currentUiState,
      isLoading: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openModalReducer: openModalActionCreator,
  closeModalReducer: closeModalActionCreator,
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
} = uiSlice.actions;
