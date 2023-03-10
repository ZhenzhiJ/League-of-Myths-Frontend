import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { store } from "../../redux/store";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import RegisterForm, { RegisterFormData } from "./RegisterForm";

const mockLogin = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => {
  return () => ({
    registerUser: mockLogin,
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Given a Register form component", () => {
  const labelUsername = "Username:";
  const labelPassword = "Password:";
  const labelEmail = "Email:";
  const nameButton = "Register";

  describe("When it's rendered", () => {
    test("Then it should show 3 text inputs: Username, Email, Password and a 'Register' button", () => {
      renderWithProviders(<RegisterForm />);

      const buttonRegister = screen.getByRole("button", {
        name: nameButton,
      });

      const inputUsername = screen.getByLabelText(labelUsername);
      const inputPassword = screen.getByLabelText(labelPassword);
      const inputEmail = screen.getByLabelText(labelEmail);

      expect(inputUsername).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
      expect(inputEmail).toBeInTheDocument();
      expect(buttonRegister).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user types in the username 'pokachu', password 'pokachu' and clicks 'Register'", () => {
    test("Then a text with '\"email\" is not allowed to be empty' should show on the screen", async () => {
      const userInput = {
        username: "pokachu",
        password: "pokachu",
      };
      const expectedErrorText = /"email" is not allowed to be empty/i;

      renderWithProviders(<RegisterForm />, { store: store });

      const usernameInput = screen.queryByRole("textbox", {
        name: labelUsername,
      });
      const passwordInput = screen.queryByLabelText(labelPassword);
      const renderedButton = screen.queryByRole("button", {
        name: nameButton,
      });

      await userEvent.type(usernameInput!, userInput.username);
      await userEvent.type(passwordInput!, userInput.password);
      await userEvent.click(renderedButton!);

      const renderedError = screen.queryByText(expectedErrorText);

      expect(renderedError).toBeInTheDocument();
    });
  });

  describe("When its rendered with the correct register data and its 'Register' button is clicked", () => {
    test("Then the form should be submitted", async () => {
      const userInput: RegisterFormData = {
        username: "pokachu",
        password: "pokachu",
        email: "pokachu@pokachu.com",
      };

      renderWithProviders(<RegisterForm />);

      const usernameInput = screen.queryByRole("textbox", {
        name: labelUsername,
      });
      const passwordInput = screen.queryByLabelText(labelPassword);
      const emailInput = screen.queryByLabelText(labelEmail);
      const renderedButton = screen.queryByRole("button", {
        name: nameButton,
      });

      await userEvent.type(usernameInput!, userInput.username);
      await userEvent.type(passwordInput!, userInput.password);
      await userEvent.type(emailInput!, userInput.email);
      await userEvent.click(renderedButton!);

      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(mockLogin).toBeCalled();
    });
  });
});
