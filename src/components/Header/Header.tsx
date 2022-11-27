import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <img src="images/header.png" alt="header logo" height={38} />
      <span className="title">League of Myths</span>
    </HeaderStyled>
  );
};

export default Header;
