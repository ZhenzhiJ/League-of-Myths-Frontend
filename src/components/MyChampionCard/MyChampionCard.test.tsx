import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getRandomChampion } from "../../factories/championFactory";
import { Champion } from "../../redux/features/championSlice/types";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import MyChampionCard from "./MyChampionCard";

const mockDelete = jest.fn();
jest.mock("../../hooks/useChampion/useChampion.ts", () => {
  return () => ({
    deleteChampion: mockDelete,
  });
});

describe("Given a ChampionCard component", () => {
  const testChampion: Champion = getRandomChampion();

  describe("When its rendered with one champion", () => {
    test("Then it should show a image with aria label of the champion's name", async () => {
      const expectedName = testChampion.name;

      renderWithProviders(<MyChampionCard champion={testChampion} />);

      const renderedImage = screen.queryByRole("img", {
        name: expectedName,
      }) as HTMLImageElement;
      const expectedDeleteButton = screen.queryByLabelText("Delete");

      expect(renderedImage).toBeInTheDocument();
      expect(renderedImage.alt).toBe(expectedName);
      expect(expectedDeleteButton).toBeInTheDocument();
      await userEvent.click(expectedDeleteButton!);
      expect(mockDelete).toHaveBeenCalledWith(testChampion.id);
    });
  });
});
