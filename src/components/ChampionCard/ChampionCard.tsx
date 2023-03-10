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
      <h4 className="champion-name">{name.toUpperCase()}</h4>
      <h4 className="champion-role">{role.toUpperCase()}</h4>
    </ChampionCardStyled>
  );
};

export default ChampionCard;
