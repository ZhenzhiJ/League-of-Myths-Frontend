import {
  isLoggedOptions,
  NavigationOptionsStructure,
  notLogguedOptions,
} from "../../assets/navigationOptions";
import { useAppSelector } from "../../redux/hooks";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const navigationOptions: NavigationOptionsStructure = isLogged
    ? isLoggedOptions
    : notLogguedOptions;

  return (
    <HeaderStyled className="main-header">
      <div className="logo-container">
        <h1 className="title">League of Myths</h1>
        <img src="images/header.png" alt="header logo" height={38} width={38} />
      </div>
      <NavigationMenu
        paths={navigationOptions.paths}
        texts={navigationOptions.texts}
      />
    </HeaderStyled>
  );
};

export default Header;
