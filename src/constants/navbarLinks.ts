import { NavbarLink } from "components/navbar/Navbar";

import { ROOT } from "constants/routes";

export const navbarLinks: {
  [key: string]: NavbarLink[];
} = {
  [ROOT]: [
    {
      label: "About",
      to: "about-me",
      offset: 0,
    },
    {
      label: "Experience",
      to: "experience",
      offset: 58,
    },
    {
      label: "Projects",
      to: "favourite-projects",
      offset: 58,
    },
    {
      label: "Contact",
      to: "contact-me",
      offset: 58,
    },
  ],
};
