import { Route, Routes } from "react-router-dom";
import useToken from "../../hooks/useToken/useToken";
import CreatePage from "../../pages/CreatePage/CreatePage";
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import MyChampionPage from "../../pages/MyChampionPage/MyChampionPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import { useAppSelector } from "../../redux/hooks";
import ExitRoute from "../ExitRoute/ExitRoute";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";

const App = () => {
  const isLoading = useAppSelector((state) => state.uiModal.isLoading);
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const { getToken } = useToken();
  getToken();

  return (
    <>
      <Header />
      {isLoading && <Loading />}
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
        <Route path="/my-champions" element={<MyChampionPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
