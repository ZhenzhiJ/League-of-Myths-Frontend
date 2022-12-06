import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import CreateForm from "./CreateForm";

const mockSubmit = jest.fn();
jest.mock("../../hooks/useChampion/useChampion.ts", () => {
  return () => ({
    createChampion: mockSubmit,
  });
});

describe("Given the LoginForm Component", () => {
  const nameText = "Name:";
  const roletext = "Role:";
  const optionRole = "top";
  const passiveText = "Passive:";
  const abilityQtext = "Ability Q:";
  const abilityWtext = "Ability W:";
  const abilityEtext = "Ability E:";
  const ultimateRtext = "Ultimate R:";
  const createButton = "Create";

  describe("When it's rendered", () => {
    test("Then it should return 6 input text, 1 select and a button 'create'", () => {
      renderWithProviders(<CreateForm />);

      const expectedName = screen.getByRole("textbox", {
        name: nameText,
      });
      const championRoleSelect = screen.getByRole("combobox", {
        name: roletext,
      });
      const championRoleOption = screen.getByRole("option", {
        name: optionRole,
      });
      const expectedPassive = screen.getByRole("textbox", {
        name: passiveText,
      });
      const expectedAbilityQ = screen.getByRole("textbox", {
        name: abilityQtext,
      });
      const expectedAbilityW = screen.getByRole("textbox", {
        name: abilityWtext,
      });
      const expectedAbilityE = screen.getByRole("textbox", {
        name: abilityEtext,
      });
      const expectedUltimateR = screen.getByRole("textbox", {
        name: ultimateRtext,
      });

      const expectedButton = screen.getByRole("button", {
        name: createButton,
      });

      expect(expectedName).toBeInTheDocument();
      expect(championRoleSelect).toBeInTheDocument();
      expect(championRoleOption).toBeInTheDocument();
      expect(expectedPassive).toBeInTheDocument();
      expect(expectedAbilityQ).toBeInTheDocument();
      expect(expectedAbilityE).toBeInTheDocument();
      expect(expectedAbilityW).toBeInTheDocument();
      expect(expectedUltimateR).toBeInTheDocument();
      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When it's rendered all inputs fullfilled and Create button is clicked", () => {
    test("Then the form should be submited", async () => {
      const image = new File(["avatar"], "avatar.jpg", {
        type: "image/jpg",
      });

      renderWithProviders(<CreateForm />);

      const expectedImage = screen.getByTestId("input image");
      const expectedName = screen.getByRole("textbox", {
        name: nameText,
      });
      const championRoleSelect = screen.getByRole("combobox", {
        name: roletext,
      });
      const championRoleOption = screen.getByRole("option", {
        name: optionRole,
      });
      const expectedPassive = screen.getByRole("textbox", {
        name: passiveText,
      });
      const expectedAbilityQ = screen.getByRole("textbox", {
        name: abilityQtext,
      });
      const expectedAbilityW = screen.getByRole("textbox", {
        name: abilityWtext,
      });
      const expectedAbilityE = screen.getByRole("textbox", {
        name: abilityEtext,
      });
      const expectedUltimateR = screen.getByRole("textbox", {
        name: ultimateRtext,
      });

      const expectedButton = screen.getByRole("button", {
        name: createButton,
      });

      URL.createObjectURL = jest.fn().mockReturnValue(image.type);

      await userEvent.type(expectedName, "test");
      await userEvent.type(expectedPassive, "test");
      await userEvent.type(expectedAbilityQ, "test");
      await userEvent.type(expectedAbilityW, "test");
      await userEvent.type(expectedAbilityE, "1");
      await userEvent.type(expectedUltimateR, "2");
      await userEvent.upload(expectedImage!, image);

      userEvent.click(championRoleSelect);

      userEvent.click(within(championRoleOption).getByText(/top/i));
      await userEvent.click(expectedButton);

      await userEvent.click(expectedButton);

      expect(mockSubmit).toBeCalled();
    });
  });
});
