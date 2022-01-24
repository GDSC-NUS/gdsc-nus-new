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
      label: "Projects",
      to: "projects",
      offset: 58,
    },
    {
      label: "Experience",
      to: "experience",
      offset: 58,
    },
    {
      label: "Contact",
      to: "my-footer",
      offset: 58,
    },
  ],
};
