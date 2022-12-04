import { screen } from "@testing-library/react";
import { getRandomChampionList } from "../../factories/championFactory";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import ChampionCardList from "./ChampionCardList";
import { initialUiState } from "../../redux/features/uiSlice/uiSlice";
import { initialUserState } from "../../redux/features/userSlice/userSlice";

describe("Given a ChampionardList component", () => {
  describe("When it's rendered with 4 characters in the store", () => {
    test("Then it should show 4 champion cards with level 4 heading Name and level 4 heading Role", () => {
      const expectedHeadingsLevel = 4;
      const expectedTotalLength = 8;

      renderWithProviders(<ChampionCardList />, {
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
