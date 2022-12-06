import { renderHook } from "@testing-library/react";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import ProviderWrapper from "../../testUtils/ProviderWrapper";
import {
  CustomTokenPayload,
  UserCredentials,
  UserRegisterCredentials,
} from "../../hooks/useUser/types";
import useUser from "./useUser";
import mockInitialStore from "../../mocks/stores/mockInitialStore";
import { User } from "../../redux/features/userSlice/types";
import { logoutUserActionCreator } from "../../redux/features/userSlice/userSlice";
import mockLocalStorage from "../../mocks/localStorage/mockLocalStorage";

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock("jwt-decode", () => {
  return () => ({ id: "testid", username: "pokachu" } as CustomTokenPayload);
});

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

Object.defineProperty(window, "localStorage", {
  value: mockLocalStorage,
});

afterAll(() => {
  mockLocalStorage.clear();
});

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
        modalText: "User succesfully registered.",
      };

      await registerUser(newUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(actionPayload)
      );
      expect(mockedUseNavigate).toHaveBeenCalledWith("/home");
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
        modalText: "User already registered.",
      };

      await registerUser(registeredUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(actionPayload)
      );
    });
  });

  describe("When its method loginUser is invoked with username 'pokachu' and incorrect password 'pokemon'", () => {
    test("Then dispatch should be called with openModalActionCreator and show the modal with an error message", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });

      const user: UserCredentials = {
        username: "pokachu",
        password: "pokemon",
      };

      const actionPayload = {
        isError: true,
        modalText: "Login failed",
      };

      await loginUser(user);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(actionPayload)
      );
    });
  });

  describe("When its method loginUser is invoked with username 'pokachu' and correct password 'pokachu'", () => {
    test("Then dispatch should be called with openModalActionCreator and the token should be stored in local storage", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });

      const user: UserCredentials = {
        username: "pokachu",
        password: "pokachu",
      };

      const actionPayload: User = {
        username: "pokachu",
        id: "testid",
        token: "testtoken",
      };

      await loginUser(user);

      expect(mockLocalStorage.getItem("token")).toBe(actionPayload.token);
    });
  });

  describe("When its method logoutUser is invoked", () => {
    test("Then logout user action should be called", () => {
      const {
        result: {
          current: { logoutUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });

      logoutUser();

      expect(dispatchSpy).toHaveBeenCalledWith(logoutUserActionCreator());
    });
  });
});
