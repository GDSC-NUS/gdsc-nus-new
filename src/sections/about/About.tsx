import { ReactElement } from "react";
import SectionWrapper from "components/section/SectionWrapper";

import AboutItem from "components/aboutItem/AboutItem";
import { about } from "data/about";

import "./About.scss";

const About = (): ReactElement<void, typeof SectionWrapper> => {
  const { aboutItems } = about;
  return (
    <SectionWrapper className="about" isWide={true}>
      {aboutItems.map((item, index) => (
        <AboutItem key={`item-${index}`} item={item} />
      ))}
    </SectionWrapper>
  );
};

export default About;
