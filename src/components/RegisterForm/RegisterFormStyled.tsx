import styled from "styled-components";

const RegisterFormStyled = styled.form`
  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
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
`;

export default RegisterFormStyled;
