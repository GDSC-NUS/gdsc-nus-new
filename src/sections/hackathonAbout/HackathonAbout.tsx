import { ReactElement } from "react";
import SectionHeading from "../../components/section/SectionHeading";
import SectionWrapper from "../../components/section/SectionWrapper";

import { HackForGood } from "data/hackForGood";

import "./HackathonAbout.scss";
import UndraggableImage from "components/undraggableImage/UndraggableImage";
import { processCloudinaryUrl } from "utils/imageUtils";

const HackathonAbout = (): ReactElement<void, typeof SectionWrapper> => {
  const { themes, primaryDetails, secondaryDetails } = HackForGood;
  return (
    <SectionWrapper className="hackathon-about" isWide>
      <SectionHeading increasedMarginTop title="About" />
      <p className="hackathon-about__description is-32">{primaryDetails}</p>
      <p className="is-32">{secondaryDetails}</p>

      <SectionHeading increasedMarginTop title="Themes" />
      <div className="is-bold is-32 hackathon-about__themes">
        {themes.map((theme) => (
          <div>
            <UndraggableImage
              alt={theme.title}
              src={processCloudinaryUrl(theme.image)}
            />
            <p>{theme.title}</p>
          </div>
        ))}
      </div>

      <SectionHeading increasedMarginTop title="Problem Statements" />
      <p className="hackathon-about__description is-32">
        To be released at the Opening Ceremony
      </p>
    </SectionWrapper>
  );
};

export default HackathonAbout;
