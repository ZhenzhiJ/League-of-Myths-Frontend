import { screen } from "@testing-library/react";
import {
  mockChampionInitialstate,
  mockErrorFeedback,
  mockSuccessFeedback,
  mockUserInitialState,
} from "../../mocks/states/mockModalState";
import {
  closeModalActionCreator,
  openModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Modal from "./Modal";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockDispatch,
}));

jest.useFakeTimers();

describe("Given a Feedback component", () => {
  describe("When its rendered with text 'Errorn't' and isError is false", () => {
    test("Then it should show the received text and close after 2300 seconds", () => {
      const expectedMessage = "Errorn't";

      renderWithProviders(
        <Modal isError={false} messageFeedback={expectedMessage} />,
        {
          preloadedState: {
            uiModal: mockSuccessFeedback,
            user: mockUserInitialState,
            champion: mockChampionInitialstate,
          },
        }
      );
      jest.advanceTimersByTime(2350);

      const feedback = screen.queryByText(expectedMessage);
      expect(feedback).toBeInTheDocument();
    });
  });
  describe("When its rendered with text 'Error' and isError is true", () => {
    test("Then it should show the received text and close after 2300 seconds", () => {
      const expectedMessage = "Error";

      renderWithProviders(
        <Modal isError={true} messageFeedback={expectedMessage} />,
        {
          preloadedState: {
            uiModal: mockErrorFeedback,
            user: mockUserInitialState,
            champion: mockChampionInitialstate,
          },
        }
      );
      jest.advanceTimersByTime(2350);

      const feedback = screen.queryByText(expectedMessage);
      expect(feedback).toBeInTheDocument();
      expect(mockDispatch).toHaveBeenCalledWith(closeModalActionCreator());
    });
  });
});
