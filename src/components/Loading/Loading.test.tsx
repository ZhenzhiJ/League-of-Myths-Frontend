import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Loading from "./Loading";

describe("Given the Loading Component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an loading animation with aria label 'Ying-yang'", () => {
      const expectedAriaLabel = "Ying-yang";

      renderWithProviders(<Loading />);

      const expectedLoading = screen.getByLabelText(expectedAriaLabel);

      expect(expectedLoading).toBeInTheDocument();
    });
  });
});
