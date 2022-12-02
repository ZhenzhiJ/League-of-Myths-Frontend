import styled from "styled-components";

const ChampionCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;
  font-size: 48px;
  p {
    margin: 0;
  }
  .champion {
    &-image {
      width: 300px;
      height: 300px;
      object-fit: cover;
      object-position: top;
      margin: 0 auto;
      border-radius: 25px;
    }
  }
`;

export default ChampionCardStyled;
