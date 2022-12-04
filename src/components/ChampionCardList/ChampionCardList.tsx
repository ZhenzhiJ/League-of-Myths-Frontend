import { faker } from "@faker-js/faker";
import { useEffect } from "react";
import useChampion from "../../hooks/useChampion/useChampion";
import { useAppSelector } from "../../redux/hooks";
import ChampionCard from "../ChampionCard/ChampionCard";
import ChampionCardListStyled from "./ChampionCardListStyled";

const ChampionCardList = (): JSX.Element => {
  const champions = useAppSelector((state) => state.champion.champions);
  const { getAllChampions } = useChampion();

  useEffect(() => {
    getAllChampions();
  }, [getAllChampions]);

  return (
    <ChampionCardListStyled>
      <h2 className="subtitle">CREATE YOUR OWN MYTHS</h2>
      <h3 className="list-title">Mythics:</h3>
      <ul className="champion-list">
        {champions.length === 0 ? (
          <h3 className="empty-warning">
            Sorry, all champions are at the Rift.
          </h3>
        ) : (
          champions.map((champion) => (
            <ChampionCard champion={champion} key={faker.random.word()} />
          ))
        )}
      </ul>
    </ChampionCardListStyled>
  );
};

export default ChampionCardList;
