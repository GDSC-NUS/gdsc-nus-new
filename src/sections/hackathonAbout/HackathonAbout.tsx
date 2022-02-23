import { ReactElement } from "react";
import SectionHeading from "../../components/section/SectionHeading";
import SectionWrapper from "../../components/section/SectionWrapper";

import { HackForGood } from "data/hackForGood";
import community from "assets/hackForGood/community.png";
import environment from "assets/hackForGood/environment.png";

import "./HackathonAbout.scss";
import UndraggableImage from "components/undraggableImage/UndraggableImage";

const HackathonAbout = (): ReactElement<void, typeof SectionWrapper> => {
  const { primaryDetails, secondaryDetails } = HackForGood;
  return (
    <SectionWrapper className="hackathon-about" isWide>
      <SectionHeading increasedMarginTop title="About" />
      <p className="hackathon-about__description is-32">{primaryDetails}</p>
      <p className="is-32">{secondaryDetails}</p>
      <SectionHeading increasedMarginTop title="Themes" />
      <div className="is-bold is-32 hackathon-about__themes">
        <div>
          <UndraggableImage alt="community" src={community} />
          <p>Community</p>
        </div>
        <div>
          <UndraggableImage alt="environment" src={environment} />
          <p>Environment</p>
        </div>
        <div>
          <UndraggableImage alt="equality" src={environment} />
          <p>Equality</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HackathonAbout;
