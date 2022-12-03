import { Champion } from "../../redux/features/championSlice/types";
import ChampionCardStyled from "./ChampionCardStyled";

interface ChampionCardProps {
  champion: Champion;
}

const ChampionCard = ({
  champion: { name, role, imageBackup },
}: ChampionCardProps): JSX.Element => {
  return (
    <ChampionCardStyled>
      <img src={imageBackup} alt={name} className="champion-image" />
      <h3 className="champion-name">{name.toUpperCase()}</h3>
      <h3 className="champion-role">{role.toUpperCase()}</h3>
    </ChampionCardStyled>
  );
};

export default ChampionCard;
