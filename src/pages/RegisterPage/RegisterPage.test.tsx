import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import RegisterPage from "./RegisterPage";

describe("Given a register page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a register form with the label 'username', 'password', 'email' and a 'Register' button", () => {
      const labelUsername = "Username:";
      const labelPassword = "Password:";
      const labelEmail = "Email:";
      const nameButton = "Register";

      renderWithProviders(<RegisterPage />);

      const buttonSignUp = screen.getByRole("button", {
        name: nameButton,
      });

      const inputUsername = screen.getByLabelText(labelUsername);
      const inputEmail = screen.getByLabelText(labelEmail);
      const inputPassword = screen.getByLabelText(labelPassword);

      expect(buttonSignUp).toBeInTheDocument();
      expect(inputEmail).toBeInTheDocument();
      expect(inputUsername).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
    });
  });
});
