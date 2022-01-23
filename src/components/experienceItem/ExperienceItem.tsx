import { ReactElement } from "react";
import { OutboundLink } from "react-ga";

import SkillIcon from "components/skillIcon/SkillIcon";
import UndraggableImage from "components/undraggableImage/UndraggableImage";
import { organisationToLogo } from "constants/logos";
import { Experience } from "data/experience";

import "./ExperienceItem.scss";

interface ExperienceProps {
  experience: Experience;
}

const ExperienceItem = (
  props: ExperienceProps
): ReactElement<ExperienceProps, "div"> => {
  const { experience } = props;
  const {
    start,
    end,
    title,
    organisation,
    organisationLink,
    description,
    points,
    stacks,
  } = experience;

  const hasLogo = organisationToLogo[organisation] != null;

  const organisationContent = hasLogo ? (
    <UndraggableImage
      alt={organisation}
      src={organisationToLogo[organisation]}
    />
  ) : (
    organisation
  );

  return (
    <div className="experience-item">
      <div className="is-36 is-bold experience-item__title">
        <span className="experience-item__title-role">{title} | </span>
        <span className="is-28 is-grey">{`${start} - ${end}`}</span>
      </div>
      <OutboundLink
        className="experience-item__organisation"
        eventLabel={`Experience - ${organisation}`}
        target="_blank"
        to={organisationLink}
      >
        {organisationContent}
      </OutboundLink>
      <div className="is-28 is-grey">{description}</div>
      {points.map((point, index) => (
        <div
          className="is-28 experience-item__point"
          key={`${title}-point-${index}`}
        >
          <div className="experience-item__point-arrow">•</div>
          <div>{point}</div>
        </div>
      ))}
      {stacks.map((stack) => (
        <div
          className="experience-item__stack"
          key={`experience-${title}-${stack.title}`}
        >
          <div className="is-28 tag is-rounded experience-item__stack-title">
            {stack.title}
          </div>
          <div className="icons-wrapper">
            {stack.skills.map((skill) => (
              <SkillIcon
                key={`experience-${title}-${stack.title}-${skill as string}`}
                skill={skill}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceItem;
