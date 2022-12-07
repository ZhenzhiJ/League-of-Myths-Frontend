import { screen } from "@testing-library/react";
import { getRandomChampionList } from "../../factories/championFactory";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { initialUiState } from "../../redux/features/uiSlice/uiSlice";
import { initialUserState } from "../../redux/features/userSlice/userSlice";
import MyChampionList from "./MyChampionList";

describe("Given a ChampionardList component", () => {
  describe("When it's rendered with 4 characters in the store", () => {
    test("Then it should show 4 champion cards with level 4 heading Name and level 4 heading Role", () => {
      const expectedHeadingsLevel = 4;
      const expectedTotalLength = 8;

      renderWithProviders(<MyChampionList />, {
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

  describe("When it's rendered with 0 characters in the store", () => {
    test("Then it should show 4 champion cards with level 4 heading Name and level 4 heading Role", () => {
      const expectedHeadingsLevel = 3;

      renderWithProviders(<MyChampionList />);

      const cardHeaders = screen.queryByRole("heading", {
        level: expectedHeadingsLevel,
        name: "You don't have champions yet.",
      });
      expect(cardHeaders).toBeInTheDocument();
    });
  });
});
