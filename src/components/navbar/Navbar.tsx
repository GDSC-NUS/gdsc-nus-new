import { ReactElement, useState } from "react";
import { Link } from "react-scroll";

import "./Navbar.scss";

export interface NavbarLink {
  label: string;
  to: string;
  offset: number;
}

interface NavbarProps {
  links: NavbarLink[];
  isDark: boolean;
  setIsDark: () => void;
  isBrandClickable?: boolean;
  brandLink?: string;
}

const Navbar = ({
  links,
  isDark,
  setIsDark,
}: NavbarProps): ReactElement<NavbarProps, "nav"> => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <nav
      aria-label="Main Navigation"
      className="navbar is-28"
      role="navigation"
    >
      <div className="navbar-brand">
        <div className={`is-bold is-32`}>Joel Wong</div>
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
                className="navbar-item is-reversed is-20"
                key={`navbar-${l.label}`}
                offset={l.offset}
                smooth={true}
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
