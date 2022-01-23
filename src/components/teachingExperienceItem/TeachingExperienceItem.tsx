import { Fragment, ReactElement } from "react";
import { OutboundLink } from "react-ga";

import ModuleCode from "components/moduleCode/ModuleCode";
import SkillIcon from "components/skillIcon/SkillIcon";
import { TeachingExperience } from "data/teachingExperience";

import "./TeachingExperienceItem.scss";

interface TeachingExperienceProps {
  teachingExperience: TeachingExperience;
}

const TeachingExperienceItem = (
  props: TeachingExperienceProps
): ReactElement<TeachingExperienceProps, "div"> => {
  const { teachingExperience } = props;
  const {
    start,
    end,
    title,
    organisation,
    organisationLink,
    description,
    modules,
    stacks,
  } = teachingExperience;

  return (
    <div className="experience-item">
      <div className="is-36 is-bold experience-item__title">
        <span className="experience-item__title-role">{title} | </span>
        <span className="is-28 is-grey">{`${start} - ${end}`}</span>
      </div>
      <OutboundLink
        className="is-32"
        eventLabel={`Experience - ${organisation}`}
        target="_blank"
        to={organisationLink}
      >
        {organisation}
      </OutboundLink>
      <div className="is-28 is-grey is-teaching">{description}</div>
      <div>
        {modules.map((module, index) => {
          const year = Object.keys(module)[0];
          if (year == null) {
            return null;
          }

          return (
            <div
              className="is-28 experience-item__point is-teaching"
              key={`${title}-point-${index}`}
            >
              <div className="experience-item__point-arrow">•</div>
              <div className="experience-item__modules">
                <span className="experience-item__modules-year">{year}:</span>
                {module[year]?.map((m, index) => (
                  <Fragment key={`module-${year}-${index}`}>
                    {index !== 0 && (
                      <span className="experience-item__modules-sep">|</span>
                    )}
                    <ModuleCode moduleCode={m} />
                  </Fragment>
                ))}
              </div>
            </div>
          );
        })}
      </div>
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

export default TeachingExperienceItem;
