import UndraggableImage from "components/undraggableImage/UndraggableImage";
import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import GDSC from "assets/gdsc.svg";

import "./Navbar.scss";

export interface NavbarLink {
  label: string;
  to: string;
}

interface NavbarProps {
  links: NavbarLink[];
  isBrandClickable?: boolean;
  brandLink?: string;
}

const Navbar = ({ links }: NavbarProps): ReactElement<NavbarProps, "nav"> => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <nav
      aria-label="Main Navigation"
      className="navbar is-28"
      role="navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-image no-underline" to={"/"}>
          <UndraggableImage alt="gdsc-nus" src={GDSC} />
        </Link>
        {links.length > 0 && (
          <button
            aria-expanded="false"
            aria-label="Menu"
            className={`navbar-burger burger${isVisible ? " is-active" : ""}`}
            data-target="navbar"
            onClick={(): void => setIsVisible((state) => !state)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        )}
      </div>
      {links.length > 0 && (
        <div
          className={`navbar-menu${isVisible ? " is-active" : ""}`}
          id="navbar"
        >
          <div className="navbar-end">
            {links.map((l: NavbarLink) => (
              <Link
                className="navbar-item is-reversed is-28 is-bold"
                key={`navbar-${l.label}`}
                to={l.to}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
