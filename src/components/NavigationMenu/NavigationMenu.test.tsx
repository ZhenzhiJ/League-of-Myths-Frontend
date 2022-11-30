import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { NavigationMenu } from "./NavigationMenu";

describe("Given the NavigationMenu component", () => {
  const expectedTexts = ["test1", "test2", "Logout"];
  const expectedPaths = ["/test1", "/test2", "/logout"];

  describe("When its rendered with 2 test texts and a 'Logout' text and 2 test paths and '/logout' path", () => {
    test("Then it should show a button with aria label 'Navigation Menu' and 2 links to test paths and a button with 'Log out'", () => {
      const labelTextButtonLogout = "Log out";

      renderWithProviders(
        <NavigationMenu paths={expectedPaths} texts={expectedTexts} />
      );

      const expectedFirstLink = screen.queryByLabelText(
        `Go to ${expectedTexts[0]}`
      );
      const expectedSecondLink = screen.queryByLabelText(
        `Go to ${expectedTexts[1]}`
      );
      const expectedButton = screen.queryByLabelText("Navigation menu");
      const expecteButtonLogout = screen.getByRole("button", {
        name: labelTextButtonLogout,
      });

      expect(expectedFirstLink).toBeInTheDocument();
      expect(expectedSecondLink).toBeInTheDocument();
      expect(expectedButton).toBeInTheDocument();
      expect(expecteButtonLogout).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the button is clicked", () => {
    test("Then it should show a list with classname 'hidden' before click and classname 'show' after click", async () => {
      renderWithProviders(
        <NavigationMenu paths={expectedPaths} texts={expectedTexts} />
      );

      const expectedButton = screen.queryByLabelText("Navigation menu");
      const expectedList = screen.queryByRole("list");

      expect(expectedList).toHaveClass("hidden");

      await userEvent.click(expectedButton!);

      const expectedListBeforeClick = screen.queryByRole("list");

      expect(expectedListBeforeClick).toHaveClass("show");
    });
  });
});
