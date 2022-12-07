import { useEffect } from "react";
import useChampion from "../../hooks/useChampion/useChampion";
import { useAppSelector } from "../../redux/hooks";
import MyChampionCard from "../MyChampionCard/MyChampionCard";
import MyChampionListStyled from "./MyChampionListStyled";

const MyChampionList = (): JSX.Element => {
  const champions = useAppSelector((state) => state.champion.champions);
  const { getMyChampions } = useChampion();

  useEffect(() => {
    getMyChampions();
  }, [getMyChampions]);

  return (
    <MyChampionListStyled>
      <h2 className="subtitle">CREATE YOUR OWN MYTHS</h2>
      <h3 className="list-title">Mythics:</h3>
      <ul className="champion-list">
        {champions.length === 0 ? (
          <li>
            <h3 className="empty-warning">You don't have champions yet.</h3>
          </li>
        ) : (
          champions.map((champion) => (
            <MyChampionCard champion={champion} key={champion.id} />
          ))
        )}
      </ul>
    </MyChampionListStyled>
  );
};

export default MyChampionList;
