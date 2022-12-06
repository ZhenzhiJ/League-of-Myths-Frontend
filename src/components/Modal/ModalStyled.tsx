import styled from "styled-components";

const FeedbackStyled = styled.div`
  position: fixed;
  top: 80px;
  right: 80px;
  padding: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.feedback-error {
    background-color: #666666;
    color: #ff0000;
    border: 2px solid black;
  }
  &.feedback-success {
    background-color: #666666;
    color: #0000ff;
    border: 2px solid black;
  }
`;

export default FeedbackStyled;
