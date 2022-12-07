import { screen } from "@testing-library/react";
import { getRandomChampionList } from "../../factories/championFactory";
import { initialUiState } from "../../redux/features/uiSlice/uiSlice";
import { initialUserState } from "../../redux/features/userSlice/userSlice";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import MyChampionPage from "./MyChampionPage";

describe("Given a login page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a register form with the label 'username', 'password' and a 'Login' button", () => {
      const expectedHeadingsLevel = 4;
      const expectedTotalLength = 8;

      renderWithProviders(<MyChampionPage />, {
        preloadedState: {
          user: initialUserState,
          uiModal: initialUiState,
          champion: { champions: getRandomChampionList(4) },
        },
      });

      const cardHeaders = screen.queryAllByRole("heading", {
        level: expectedHeadingsLevel,
      });
      expect(cardHeaders).toHaveLength(expectedTotalLength);
    });
  });
});
