import styled from "styled-components";

const ChampionCardListStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  .subtitle {
    color: #bcbd6e;
    padding-top: 30px;
    margin: 0;
    text-align: center;
    font-size: 48px;
  }
  .list-title {
    margin: 0;
    font-size: 32px;
  }
  .champion-list {
    display: grid;
    justify-content: center;
    gap: 100px;
    padding: 0px;
  }
`;

export default ChampionCardListStyled;
