import { Fragment, ReactElement, useLayoutEffect, useState } from "react";
import { OutboundLink } from "react-ga";
import SectionWrapper from "../../components/section/SectionWrapper";

import { introduction } from "data/introduction";
import DscTeam from "../../assets/home/dscteam.jpg";

import "./Introduction.scss";

const Introduction = (): ReactElement<void, typeof Fragment> => {
  const { location, locationLink } = introduction;
  const [minHeight, setMinHeight] = useState(530);

  useLayoutEffect(() => {
    const windowHeight = window.innerHeight;
    setMinHeight(Math.min(windowHeight - 100, 530));
  }, []);

  return (
    <>
      <SectionWrapper className="introduction" minHeight={minHeight} isWide>
        <div className="introduction__title is-72 is-bold">
          <span>We are a #TechFor</span>
          <span className="blue">G</span>
          <span className="red">o</span>
          <span className="green">o</span>
          <span className="yellow">d</span>
          <span> Club.</span>
        </div>
        <p className="introduction__body is-32">
          Supported by{" "}
          <OutboundLink
            eventLabel={`Introduction - ${location}`}
            target="_blank"
            to={locationLink}
          >
            {location}
          </OutboundLink>
        </p>
      </SectionWrapper>
      <figure className="image">
        <img alt="dscteam" src={DscTeam} />
      </figure>
    </>
  );
};

export default Introduction;
