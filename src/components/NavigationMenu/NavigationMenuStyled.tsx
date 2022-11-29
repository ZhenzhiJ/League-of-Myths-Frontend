import styled from "styled-components";

const NavigationMenuStyled = styled.div`
  display: flex;
  align-items: center;
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }
  .button {
    &.navigation-menu {
      margin: 0;
      background-color: transparent;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 40px;
    }
    &:hover {
      background-color: transparent;
    }
  }
  .menu {
    &-icon {
      width: 30px;
      height: 30px;
      color: white;
      position: absolute;
    }
  }
  .main-navigation {
    display: flex;
    justify-content: flex-end;
    &__list {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: flex-end;
      position: absolute;
      top: -50%;
      z-index: 1;
      background-color: #454545;
      gap: 10px;
      width: 100%;
      padding-right: 20px;
      padding-bottom: 20px;
      list-style-type: none;
    }
    &__link {
      list-style-type: none;
      margin: 10px;
    }
  }

  .navigation-option {
    font-size: 32px;
    text-decoration: none;
    color: white;
    &.active {
      font-weight: bold;
    }
  }
  .show {
    top: 60px;
  }
  @media only screen and (min-width: 900px) {
    .mobile {
      display: none;
    }
    .desktop {
      display: block;
    }
    .button {
      &-navigation {
        margin: 0;
        background-color: transparent;
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &--logout {
        margin: 0;
        font-size: 32px;
      }
    }
    .main-navigation {
      display: flex;
      align-items: center;

      &__list {
        background-color: #111111;
        width: auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        position: absolute;
        top: auto;
        padding-right: 20px;
        padding-bottom: 0px;
      }
      &__link {
        font-size: 32px;
        color: white;
        text-decoration: none;
        &.active {
          font-weight: bold;
        }
      }
    }
  }
`;

export default NavigationMenuStyled;
