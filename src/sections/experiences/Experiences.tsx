import { ReactElement } from "react";
import SectionHeading from "../../components/section/SectionHeading";
import SectionWrapper from "../../components/section/SectionWrapper";

import ExperienceItem from "components/experienceItem/ExperienceItem";
import TeachingExperienceItem from "components/teachingExperienceItem/TeachingExperienceItem";
import { experience } from "data/experience";
import { teachingExperience } from "data/teachingExperience";

const Experiences = (): ReactElement<void, typeof SectionWrapper> => {
  const { title, experiences } = experience;
  return (
    <SectionWrapper className="experience" isWide>
      <SectionHeading increasedMarginTop title={title} />
      {experiences
        .filter((exp) => exp.isShown !== false)
        .map((exp, index) => (
          <ExperienceItem experience={exp} key={`experience-${index}`} />
        ))}
      <TeachingExperienceItem teachingExperience={teachingExperience} />
    </SectionWrapper>
  );
};

export default Experiences;
