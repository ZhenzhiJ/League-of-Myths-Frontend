import { screen } from "@testing-library/react";
import PageNotFound from "../../components/PageNotFound/PageNotFound";
import { renderWithProviders } from "../../testUtils/renderWithProviders";

describe("Given a NotFound component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a level 2 heading with '404 Page not found'", () => {
      const expectedTitle = "404 Page not found";
      renderWithProviders(<PageNotFound />);

      const expectedHeader = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
