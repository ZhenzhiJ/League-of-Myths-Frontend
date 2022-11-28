import { Link } from "react-router-dom";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = () => {
  return (
    <LoginFormStyled className="login-form form">
      <h2 className="login-form__title form__title">Login</h2>
      <div className="register-form__form-container form-container">
        <div className="login-form__form-group form__group">
          <label htmlFor="username" className="login-form__label form__label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="login-form__input form__input"
            min="5"
            autoComplete="off"
          />
        </div>

        <div className="login-form__form-group form__group">
          <label htmlFor="password" className="login-form__label form__label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="login-form__input form__input"
            min=""
            autoComplete="off"
          />
        </div>
        <Button text="Login" classname="login" />
      </div>
      <span>
        Don't have an account?{" "}
        <Link className="form__link" to="/register">
          Register
        </Link>
      </span>
    </LoginFormStyled>
  );
};

export default LoginForm;
