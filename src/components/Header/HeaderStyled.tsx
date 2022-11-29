import styled from "styled-components";

const HeaderStyled = styled.header`
  height: 60px;
  width: 100%;
  background-color: #111111;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  .logo-container {
    display: flex;
    align-items: center;
  }
  .title {
    order: 1;
    font-size: 16px;
    color: #bcbd6e;
    width: 77px;
  }
`;

export default HeaderStyled;
