import styled from "styled-components";

const MyChampionListStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  li {
    list-style-type: none;
  }

  .subtitle {
    color: #8e8f58;
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

export default MyChampionListStyled;
