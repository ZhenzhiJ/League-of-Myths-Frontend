import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteChampionActionCreator,
  loadAllChampionsActionCreator,
} from "../../redux/features/championSlice/championSlice";
import {
  hideLoadingActionCreator,
  openModalActionCreator,
  showLoadingActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import championRoutes from "./championRoutes";
import { ChampionForm } from "./types";

const apiUrl = process.env.REACT_APP_API_URL;
const { champions, createChampionRoute } = championRoutes;

const useChampion = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const getAllChampions = useCallback(async () => {
    try {
      dispatch(showLoadingActionCreator());
      const response = await axios.get(`${apiUrl}${champions}`);

      const responseData = response.data;

      const { allChampions } = responseData;

      dispatch(loadAllChampionsActionCreator(allChampions));
      dispatch(hideLoadingActionCreator());
    } catch (error: unknown) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: true,
          modalText: "Failed to load champions.",
        })
      );
    }
  }, [dispatch]);

  const getMyChampions = useCallback(async () => {
    try {
      dispatch(showLoadingActionCreator());
      const response = await axios.get(`${apiUrl}${champions}/my-champions`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = response.data;

      const { myUserChampions } = responseData;

      dispatch(loadAllChampionsActionCreator(myUserChampions));
      dispatch(hideLoadingActionCreator());
    } catch (error: unknown) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: true,
          modalText: "Failed to load champions.",
        })
      );
    }
  }, [dispatch, token]);

  const deleteChampion = useCallback(
    async (idChampion: string) => {
      try {
        dispatch(showLoadingActionCreator());
        await axios.delete(`${apiUrl}${champions}/delete/${idChampion}`);
        dispatch(deleteChampionActionCreator(idChampion));
        dispatch(hideLoadingActionCreator());
        dispatch(
          openModalActionCreator({
            isError: false,
            modalText: "Champion went back to its hometown.",
          })
        );
      } catch (error: unknown) {
        dispatch(hideLoadingActionCreator());
        dispatch(
          openModalActionCreator({
            isError: true,
            modalText: "Failed to delete champion.",
          })
        );
      }
    },
    [dispatch]
  );

  const createChampion = useCallback(
    async (championForm: ChampionForm) => {
      try {
        dispatch(showLoadingActionCreator());
        await axios.post(
          `${apiUrl}${champions}${createChampionRoute}`,
          championForm,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(hideLoadingActionCreator());
        dispatch(
          openModalActionCreator({
            isError: false,
            modalText: "Champion ready to battle.",
          })
        );

        navigate("/home");
      } catch (error: unknown) {
        dispatch(hideLoadingActionCreator());
        dispatch(
          openModalActionCreator({
            isError: true,
            modalText: "Failed to create champion.",
          })
        );
      }
    },
    [dispatch, navigate, token]
  );

  return { getAllChampions, deleteChampion, createChampion, getMyChampions };
};

export default useChampion;
