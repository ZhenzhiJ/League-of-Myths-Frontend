import { faker } from "@faker-js/faker";
import { useEffect } from "react";
import useChampion from "../../hooks/useChampion/useChampion";
import { useAppSelector } from "../../redux/hooks";
import ChampionCard from "../ChampionCard/ChampionCard";
import ChampionCardListStyled from "./ChampionCardListStyled";

const newKey = faker.random.word();

const ChampionCardList = (): JSX.Element => {
  const champions = useAppSelector((state) => state.champion.champions);
  const { getAllChampions } = useChampion();

  useEffect(() => {
    getAllChampions();
  }, [getAllChampions]);

  return (
    <ChampionCardListStyled>
      <h2>CREATE YOUR OWN MYTHS</h2>
      <h3>Mythics:</h3>
      {champions.length === 0 ? (
        <h2 className="empty-warning">Sorry, all champions are at the Rift.</h2>
      ) : (
        champions.map((champion) => (
          <ChampionCard champion={champion} key={newKey} />
        ))
      )}
    </ChampionCardListStyled>
  );
};

export default ChampionCardList;
