import { renderHook } from "@testing-library/react";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import ProviderWrapper from "../../testUtils/ProviderWrapper";
import { UserRegisterCredentials } from "../../hooks/useUser/types";
import useUser from "./useUser";
import mockInitialStore from "../../mocks/stores/mockInitialStore";

beforeEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

describe("Given the custom hook useUser", () => {
  describe("When registerUser is invoked with username 'pikachu', password 'pikachu' and email 'pikachu@pikachu.com", () => {
    test("Then dispatch should be called with openModalActionCreator", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
      const newUser: UserRegisterCredentials = {
        username: "pikachu",
        password: "pikachu",
        email: "pikachu@pikachu.com",
      };

      const actionPayload = {
        isError: false,
        modalText: "User succesfully registered",
      };

      await registerUser(newUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(actionPayload)
      );
    });
  });

  describe("When its method registerUser is invoked with username 'pokachu', password 'pokachu' and email 'pokachu@pokamon.com", () => {
    test("Then dispatch should be called with openModalActionCreator and show the modal with an error message", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
      const registeredUser: UserRegisterCredentials = {
        username: "pokachu",
        password: "pokachu",
        email: "pokachu@pokamon.com",
      };

      const actionPayload = {
        isError: false,
        modalText: "User already registered",
      };

      await registerUser(registeredUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(actionPayload)
      );
    });
  });
});
