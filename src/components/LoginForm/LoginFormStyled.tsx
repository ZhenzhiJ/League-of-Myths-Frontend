import styled from "styled-components";

const LoginFormStyled = styled.form`
  width: 300px;
  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__title {
      font-size: 32px;
    }
  }
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form__group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .form__input {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 2px solid #000;
  }

  .form__link {
    text-decoration: none;
    color: #8e8f58;
  }
  .link-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default LoginFormStyled;
