import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 1 'League of Myths'", () => {
      const expectedHeading = {
        level: 1,
        name: "League of Myths",
      };

      renderWithProviders(<App />);

      const renderedHeading = screen.queryByRole("heading", expectedHeading);

      expect(renderedHeading).toBeInTheDocument();
    });
  });
});
