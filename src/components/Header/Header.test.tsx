import { screen } from "@testing-library/react";
import mockLoggedStore from "../../mocks/stores/mockLoggedStore";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 1 'League of Myths'", () => {
      const expectedHeading = {
        level: 1,
        name: "League of Myths",
      };

      renderWithProviders(<Header />);

      const renderedHeading = screen.queryByRole("heading", expectedHeading);

      expect(renderedHeading).toBeInTheDocument();
    });
  });

  describe("When its rendered with a user logged", () => {
    test("Then it should show a level 1 heading 'League of Myths", () => {
      const expectedHeading = {
        level: 1,
        name: "League of Myths",
      };

      renderWithProviders(<Header />, { store: mockLoggedStore });

      const renderedHeading = screen.queryByRole("heading", expectedHeading);

      expect(renderedHeading).toBeInTheDocument();
    });
  });
});
