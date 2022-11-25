import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = () => {
  return (
    <RegisterFormStyled className="register-form form" autoComplete="off">
      <h2 className="register-form__title form__title">Register</h2>
      <div className="register-form__form-container form-container">
        <div className="register-form__form-group form__group">
          <label
            htmlFor="username"
            className="register-form__label form__label"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="register-form__input form__input"
            min="5"
          />
        </div>
        <div className="register-form__form-group form__group">
          <label
            htmlFor="password"
            className="register-form__label form__label"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="register-form__input form__input"
            min="5"
          />
        </div>
        <div className="register-form__form-group form__group">
          <label htmlFor="email" className="register-form__label form__label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="register-form__input form__input"
          />
        </div>
        <button>Register</button>
      </div>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
