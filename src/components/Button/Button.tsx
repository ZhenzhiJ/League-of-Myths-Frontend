import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  action?: () => void;
  classname: string;
}

const Button = ({ text, action, classname }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled className={`button ${classname}`} onClick={action}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
