import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import CreatePage from "./CreatePage";

const mockSubmit = jest.fn();
jest.mock("../../hooks/useChampion/useChampion.ts", () => {
  return () => ({
    createChampion: mockSubmit,
  });
});

describe("Given the LoginForm Component", () => {
  describe("When it's rendered", () => {
    test("Then it should return 4 input text elements, 7 spinbutton a heading 'armor class, option 'sorcerer', a select 'class:' a button 'create'", () => {
      const nameText = "Name:";
      const passiveText = "Passive:";
      const abilityQtext = "Ability Q:";
      const abilityWtext = "Ability W:";
      const abilityEtext = "Ability E:";
      const ultimateRtext = "Ultimate R:";
      const createButton = "Create";

      renderWithProviders(<CreatePage />);

      const expectedName = screen.getByLabelText(nameText);
      const expectedPassive = screen.getByLabelText(passiveText);
      const expectedAbilityQ = screen.getByLabelText(abilityQtext);
      const expectedAbilityW = screen.getByLabelText(abilityWtext);
      const expectedAbilityE = screen.getByLabelText(abilityEtext);
      const expectedUltimateR = screen.getByLabelText(ultimateRtext);

      const expectedButton = screen.getByRole("button", {
        name: createButton,
      });

      expect(expectedName).toBeInTheDocument();
      expect(expectedPassive).toBeInTheDocument();
      expect(expectedAbilityQ).toBeInTheDocument();
      expect(expectedAbilityE).toBeInTheDocument();
      expect(expectedAbilityW).toBeInTheDocument();
      expect(expectedUltimateR).toBeInTheDocument();
      expect(expectedButton).toBeInTheDocument();
    });
  });
});
