import Joi from "joi";

const registerFormSchema = Joi.object({
  username: Joi.string().min(5).required(),
  password: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
});

export default registerFormSchema;
