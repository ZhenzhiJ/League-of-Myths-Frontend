import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserCredentials } from "../../hooks/useUser/types";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import LoginForm from "./LoginForm";

const mockLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => {
  return () => ({
    loginUser: mockLoginUser,
  });
});

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

  describe("When it is rendered and the user submits username 'adm' and password 'admin123'", () => {
    test("Then a text with '\"username\" length must be at least 5 characters long' should show on the screen", async () => {
      const userInput: UserCredentials = {
        username: "adm",
        password: "admin123",
      };
      const expectedErrorMessage =
        /"username" length must be at least 5 characters long/i;

      renderWithProviders(<LoginForm />);

      const usernameInput = screen.queryByRole("textbox", {
        name: usernameLabel,
      });
      const passwordInput = screen.getByLabelText(passwordLabel);
      const loginButton = screen.queryByRole("button", {
        name: loginButtonText,
      });

      await userEvent.type(usernameInput!, userInput.username);
      await userEvent.type(passwordInput!, userInput.password);
      await userEvent.click(loginButton!);

      const renderedErrorMesssage = screen.queryByText(expectedErrorMessage);

      expect(renderedErrorMesssage).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user submits username 'admin' and password 'admin3", () => {
    test("Then loginUser should be called with the details entered", async () => {
      const userInput: UserCredentials = {
        username: "admin",
        password: "admin3",
      };

      renderWithProviders(<LoginForm />);

      const usernameInput = screen.queryByRole("textbox", {
        name: usernameLabel,
      });
      const passwordInput = screen.getByLabelText(passwordLabel);
      const loginButton = screen.queryByRole("button", {
        name: loginButtonText,
      });

      await userEvent.type(usernameInput!, userInput.username);
      await userEvent.type(passwordInput!, userInput.password);
      await userEvent.click(loginButton!);

      expect(mockLoginUser).toHaveBeenCalledWith(userInput);
    });
  });
});
