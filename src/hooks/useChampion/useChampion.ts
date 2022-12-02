import axios from "axios";
import { useCallback } from "react";
import { loadAllChampionsActionCreator } from "../../redux/features/championSlice/championSlice";
import {
  Champion,
  ChampionState,
} from "../../redux/features/championSlice/types";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import championRoutes from "./championRoutes";

const apiUrl = process.env.REACT_APP_API_URL;
const { champions } = championRoutes;

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

  return { getAllChampions };
};

export default useChampion;
