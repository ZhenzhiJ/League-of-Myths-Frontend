import { screen } from "@testing-library/react";
import { getRandomChampion } from "../../factories/championFactory";
import { Champion } from "../../redux/features/championSlice/types";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import ChampionCard from "./ChampionCard";

describe("Given a ChampionCard component", () => {
  const testChampion: Champion = getRandomChampion();

  describe("When its rendered with one champion", () => {
    test("Then it should show a image with aria label of the champion's name", () => {
      const expectedName = testChampion.name;

      renderWithProviders(<ChampionCard champion={testChampion} />);

      const renderedImage = screen.queryByRole("img", {
        name: expectedName,
      }) as HTMLImageElement;

      expect(renderedImage).toBeInTheDocument();
      expect(renderedImage.alt).toBe(expectedName);
    });
  });
});
