import axios from "axios";
import { useCallback } from "react";
import {
  deleteChampionActionCreator,
  loadAllChampionsActionCreator,
} from "../../redux/features/championSlice/championSlice";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import championRoutes from "./championRoutes";
import { ChampionForm } from "./types";

const apiUrl = process.env.REACT_APP_API_URL;
const { champions, createChampion } = championRoutes;

const useChampion = () => {
  const dispatch = useAppDispatch();

  const getAllChampions = useCallback(async () => {
    try {
      const response = await axios.get(`${apiUrl}${champions}`);

      const responseData = response.data;

      const { allChampions } = responseData;

      dispatch(loadAllChampionsActionCreator(allChampions));
    } catch (error: unknown) {
      dispatch(
        openModalActionCreator({
          isError: true,
          modalText: "Failed to load champions",
        })
      );
    }
  }, [dispatch]);

  const deleteChampion = useCallback(
    async (idChampion: string) => {
      try {
        await axios.delete(`${apiUrl}${champions}/delete/${idChampion}`);

        dispatch(deleteChampionActionCreator(idChampion));
      } catch (error: unknown) {
        dispatch(
          openModalActionCreator({
            isError: true,
            modalText: "Failed to delete champion",
          })
        );
      }
    },
    [dispatch]
  );

  const createChampion = useCallback(
    async (championForm: ChampionForm) => {
      try {
        await axios.post(
          `${apiUrl}${champions}${createChampion}`,
          championForm
        );
      } catch (error: unknown) {
        dispatch(
          openModalActionCreator({
            isError: true,
            modalText: "Failed to create champion",
          })
        );
      }
    },
    [dispatch]
  );

  return { getAllChampions, deleteChampion, createChampion };
};

export default useChampion;
