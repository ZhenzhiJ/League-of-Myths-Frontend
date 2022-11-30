import styled from "styled-components";

const PageNotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 120px;
  gap: 50px;
  .main-title {
    order: 1;
    font-size: 48px;
  }
  @media only screen and (min-width: 900px) {
    flex-direction: row;
  }
`;

export default PageNotFoundStyled;
