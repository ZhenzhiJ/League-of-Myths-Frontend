import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  const usernameLabel = /username/i;
  const passwordLabel = /password/i;
  const loginButtonText = /login/i;

  describe("When it is rendered", () => {
    test("Then it should show heading level 3 'Login', two inputs 'Username' and 'Password' and a 'Login' button", () => {
      const expectedHeading = {
        level: 3,
        name: "Login",
      };

      renderWithProviders(<LoginForm />);

      const renderedHeading = screen.queryByRole("heading", expectedHeading);
      const usernameInput = screen.queryByRole("textbox", {
        name: usernameLabel,
      });
      const passwordInput = screen.getByLabelText(passwordLabel);
      const loginButton = screen.queryByRole("button", {
        name: loginButtonText,
      });

      expect(renderedHeading).toBeInTheDocument();
      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(loginButton).toBeInTheDocument();
    });
  });
});
