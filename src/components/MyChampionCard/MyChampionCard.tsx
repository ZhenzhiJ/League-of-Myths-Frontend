import useChampion from "../../hooks/useChampion/useChampion";
import { Champion } from "../../redux/features/championSlice/types";
import Button from "../Button/Button";
import MyChampionCardStyled from "./MyChampionCardStyled";

interface ChampionCardProps {
  champion: Champion;
}

const MyChampionCard = ({
  champion: { name, role, imageBackup, id },
}: ChampionCardProps): JSX.Element => {
  const { deleteChampion } = useChampion();

  const deleteChampionAction = () => {
    deleteChampion(id);
  };

  return (
    <MyChampionCardStyled>
      <img src={imageBackup} alt={name} className="champion-image" />
      <h4 className="champion-name">{name.toUpperCase()}</h4>
      <h4 className="champion-role">{role.toUpperCase()}</h4>
      <Button
        classname="button button--delete"
        children={"Delete"}
        ariaLabel="Delete"
        action={deleteChampionAction}
      />
    </MyChampionCardStyled>
  );
};

export default MyChampionCard;
