import styled from "styled-components";

const CreateFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding-top: 50px;
  padding-bottom: 50px;

  label {
    font-size: 32px;
    font-weight: bold;
  }

  .edit-profile {
    &__image {
      width: 300px;
      height: 300px;
      object-fit: cover;
      object-position: top;
      border-radius: 25px;
      border: 5px solid black;
      object-fit: cover;
      object-position: top;
      margin: 0 auto;
    }
  }

  .character {
    &-container {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }

    &-information__item {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    &-information-container {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }
  }

  .create-form {
    &__item--image {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 50px;
    }

    &__input {
      &--image {
        width: 300px;
        padding: 5px;
        border: 2px solid #000;
      }
      &--select {
        width: 300px;
        padding: 10px;
        font-size: 24px;
      }
      &--text {
        width: 300px;
        padding: 10px;
        font-size: 24px;
      }
    }

    &__item {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }

  .character-information {
    &__input {
      width: 300px;
      padding: 10px;
      font-size: 24px;
    }
  }
`;

export default CreateFormStyle;
