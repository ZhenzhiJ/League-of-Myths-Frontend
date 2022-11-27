import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <img src="images/header.png" alt="header logo" height={38} />
      <h1 className="title">League of Myths</h1>
    </HeaderStyled>
  );
};

export default Header;
