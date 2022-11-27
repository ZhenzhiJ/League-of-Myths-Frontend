import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered with the text 'Register' and an action", () => {
    test("Then it should show a button on the screen with the received text and the action should be invoked on click", async () => {
      const buttonText = "Register";
      const buttonAction = jest.fn();
      const buttonClassname = "register";

      render(
        <Button
          text={buttonText}
          action={buttonAction}
          classname={buttonClassname}
        />
      );

      const renderedButton = screen.queryByRole("button", {
        name: buttonText,
      });
      await userEvent.click(renderedButton!);

      expect(renderedButton).toBeInTheDocument();
      expect(buttonAction).toHaveBeenCalled();
    });
  });
});
