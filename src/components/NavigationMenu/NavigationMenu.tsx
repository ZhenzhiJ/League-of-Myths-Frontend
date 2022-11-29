import { HiBars3 } from "react-icons/hi2";
import { FaTimesCircle } from "react-icons/fa";
import Button from "../Button/Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavigationMenuStyled from "./NavigationMenuStyled";
import useUser from "../../hooks/useUser/useUser";

interface NavigationMenuProps {
  paths: string[];
  texts: string[];
}

export const NavigationMenu = ({
  paths,
  texts,
}: NavigationMenuProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const { logoutUser } = useUser();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavigationMenuStyled className="main-navigation">
      <div className="mobile">
        <Button
          ariaLabel="Navigation menu"
          action={toggleMenu}
          children={
            isOpen ? (
              <FaTimesCircle
                aria-label="Menu closed"
                className={`menu-icon menu-navigation--close`}
              />
            ) : (
              <HiBars3
                aria-label="Menu opened"
                className={`menu-icon menu-navigation--open`}
              />
            )
          }
          classname="navigation-menu"
        />
        <nav className="main-navigation">
          <ul className={`main-navigation__list ${isOpen ? "show" : "hidden"}`}>
            {texts.map((text, index) => (
              <li key={`${text}${index}`} className="main-navigation__option">
                {text === "Logout" ? (
                  <Button
                    ariaLabel="Log out"
                    children={text}
                    action={logoutUser}
                    classname="--logout"
                  />
                ) : (
                  <NavLink
                    aria-label={`Go to ${text}`}
                    to={paths[index]}
                    onClick={toggleMenu}
                    className="navigation-option"
                  >
                    {text}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="desktop">
        <nav className="main-navigation">
          <ul className={`main-navigation__list`}>
            {texts.map((text, index) => (
              <li key={`${text}${index}`} className="main-navigation__option">
                {text === "Logout" ? (
                  <Button
                    children={text}
                    action={logoutUser}
                    classname="--logout"
                  />
                ) : (
                  <NavLink
                    to={paths[index]}
                    onClick={toggleMenu}
                    className="main-navigation__link"
                  >
                    {text}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </NavigationMenuStyled>
  );
};
