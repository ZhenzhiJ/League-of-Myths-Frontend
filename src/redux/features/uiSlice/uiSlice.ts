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
    openModalReducer: (
      currentUiState,
      action: PayloadAction<ShowModalActionPayload>
    ): UiState => ({
      ...currentUiState,
      showModal: true,
      isError: action.payload.isError,
      modalText: action.payload.modalText,
    }),

    closeModalReducer: (currentUiState): UiState => ({
      ...currentUiState,
      showModal: false,
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
