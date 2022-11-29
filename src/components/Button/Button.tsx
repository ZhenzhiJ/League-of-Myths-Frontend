import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  action?: () => void;
  classname?: string;
  children?: JSX.Element | JSX.Element[] | string;
  isDisable?: boolean;
  ariaLabel?: string;
}

const Button = ({
  text,
  action,
  classname,
  children,
  ariaLabel,
  isDisable,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      className={`button ${classname}`}
      onClick={action}
      aria-label={ariaLabel}
      disabled={isDisable}
    >
      {text}
      {children}
    </ButtonStyled>
  );
};

export default Button;
