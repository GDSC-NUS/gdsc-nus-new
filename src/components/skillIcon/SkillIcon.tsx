import { ReactElement } from "react";

import { Skills } from "constants/technologies";
import { getSvgrFromSkill } from "utils/skillUtils";

import "./SkillIcon.scss";

interface SkillIconProps {
  skill: Skills;
  isSmall?: boolean;
}

const SkillIcon = (
  props: SkillIconProps
): ReactElement<SkillIconProps, "div"> => {
  const { skill, isSmall } = props;

  const Svgr = getSvgrFromSkill(skill);

  return (
    <div className={`skill-icon${isSmall === true ? " is-small" : ""}`}>
      <Svgr />
      <div className="skill-icon__name is-grey">{skill as string}</div>
    </div>
  );
};

export default SkillIcon;
