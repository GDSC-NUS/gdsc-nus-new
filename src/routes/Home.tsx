import { Fragment, ReactElement } from "react";

import About from "sections/about/About";
import Introduction from "sections/introduction/Introduction";
import RecentEvents from "sections/recentEvents/RecentEvents";

const Home = (): ReactElement<void, typeof Fragment> => {
  return (
    <>
      <Introduction />
      <About />
      <RecentEvents />
    </>
  );
};

export default Home;
