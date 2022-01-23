import { Fragment, ReactElement } from "react";

// import AboutMe from "sections/aboutMe";
// import Contact from "sections/contact";
import Experiences from "sections/experiences/Experiences";
// import FavouriteProjects from "sections/favouriteProjects";
import Introduction from "../sections/introduction/Introduction";
// import OtherProjects from "sections/otherProjects";
// import Skills from "sections/skills";

const Home = (): ReactElement<void, typeof Fragment> => {
  return (
    <>
      <Introduction />
      <Experiences />
    </>
  );
};

export default Home;
