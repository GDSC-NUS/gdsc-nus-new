import { Fragment, ReactElement } from "react";

import HackathonHeader from "sections/hackathonHeader/HackathonHeader";
import HackathonAbout from "sections/hackathonAbout/HackathonAbout";
import HackathonTimeline from "sections/hackathonTimeline/HackathonTimeline";

const HackForGood = (): ReactElement<void, typeof Fragment> => {
  return (
    <>
      <HackathonHeader />
      <HackathonAbout />
      <HackathonTimeline />
    </>
  );
};

export default HackForGood;
