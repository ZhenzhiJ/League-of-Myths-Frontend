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
      <p className="champion-name">{name.toUpperCase()}</p>
      <p className="champion-role">{role.toUpperCase()}</p>
    </ChampionCardStyled>
  );
};

export default ChampionCard;
