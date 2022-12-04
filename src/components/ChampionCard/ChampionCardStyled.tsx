import styled from "styled-components";

const ChampionCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 48px;
  h4 {
    margin: 0;
  }
  .champion {
    &-image {
      width: 300px;
      height: 300px;
      object-fit: cover;
      margin: 0 auto;
      border-radius: 25px;
    }
  }

  @media (min-width: 900px) {
    .champion {
      &-image {
        width: 200px;
        height: 200px;
        object-fit: cover;
        margin: 0 auto;
        border-radius: 25px;
      }
    }
  }
`;

export default ChampionCardStyled;
