import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import RegisterForm from "./RegisterForm";

const mockLogin = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => {
  return () => ({
    registerUser: mockLogin,
  });
});

describe("Given a Register form component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 3 text inputs: Username, Email, Password and a 'Register' button", () => {
      const labelUsername = "Username:";
      const labelPassword = "Password:";
      const labelEmail = "Email:";
      const nameButton = "Register";

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
});
