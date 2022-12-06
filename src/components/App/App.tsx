import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import useToken from "../../hooks/useToken/useToken";
import HomePage from "../../pages/HomePage/HomePage";
import { useAppSelector } from "../../redux/hooks";
import ExitRoute from "../ExitRoute/ExitRoute";
import Header from "../Header/Header";

const NotFoundPage = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage")
);

const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));

const CreatePage = lazy(() => import("../../pages/CreatePage/CreatePage"));

const RegisterPage = lazy(
  () => import("../../pages/RegisterPage/RegisterPage")
);

const App = () => {
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const { getToken } = useToken();
  getToken();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <ExitRoute isLogged={isLogged}>
              <RegisterPage />
            </ExitRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ExitRoute isLogged={isLogged}>
              <LoginPage />
            </ExitRoute>
          }
        />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
