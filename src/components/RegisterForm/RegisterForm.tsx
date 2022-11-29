import React, { useState } from "react";
import { ValidationError } from "joi";
import { Link } from "react-router-dom";
import RegisterFormStyled from "./RegisterFormStyled";
import useUser from "../../hooks/useUser/useUser";
import registerFormSchema from "../../schema/registerFormSchema";
import Button from "../Button/Button";

export interface RegisterFormData {
  username: string;
  password: string;
  email: string;
}

const initialRegisterFormData: RegisterFormData = {
  username: "",
  password: "",
  email: "",
};

const RegisterForm = () => {
  const [registerFormData, setRegisterFormData] = useState(
    initialRegisterFormData
  );
  const [error, setError] = useState("");

  const { registerUser } = useUser();

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterFormData((previousFormData) => ({
      ...previousFormData,
      [event.target.id]: event.target.value,
    }));
  };

  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      await registerFormSchema.validateAsync(registerFormData, {
        abortEarly: false,
      });
      await registerUser(registerFormData);
      setError("");
    } catch (error: unknown) {
      if (error instanceof ValidationError) {
        setError(error.details.map((error) => error.message).join("\n"));
      }
    }
  };

  return (
    <RegisterFormStyled
      className="register-form form"
      autoComplete="off"
      onSubmit={handleFormSubmit}
    >
      <h3 className="register-form__title form__title">Register</h3>
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
            minLength={5}
            onChange={handleFormChange}
            value={registerFormData.username}
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
            minLength={5}
            onChange={handleFormChange}
            value={registerFormData.password}
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
            onChange={handleFormChange}
            value={registerFormData.email}
          />
        </div>
        <Button text="Register" classname="register" />
      </div>

      <span>
        Already have an account?{" "}
        <Link className="form__link" to="/login">
          Log in
        </Link>
      </span>

      {error && (
        <div className="register-form__error form__error" data-test-id="error">
          There was an error: {error}
        </div>
      )}
    </RegisterFormStyled>
  );
};

export default RegisterForm;
