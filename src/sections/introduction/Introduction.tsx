import { Fragment, ReactElement, useLayoutEffect, useState } from "react";
import { OutboundLink } from "react-ga";
import SectionWrapper from "../../components/section/SectionWrapper";
import Joel from "../../assets/joel.png";

import { introduction } from "data/introduction";

import "./Introduction.scss";

const Introduction = (): ReactElement<void, typeof Fragment> => {
  const { title, subtitle, currentStatus, location, locationLink } =
    introduction;
  const [minHeight, setMinHeight] = useState(750);

  useLayoutEffect(() => {
    const windowHeight = window.innerHeight;
    setMinHeight(Math.min(windowHeight - 100, 750));
  }, []);

  return (
    <>
      <SectionWrapper className="introduction" minHeight={minHeight} isWide>
        <h1 className="introduction__title is-72 is-bold">{title}</h1>
        <h1 className="introduction__title is-72 is-bold">{subtitle}</h1>
        <div className="introduction__emoji">
          <img alt="joel" src={Joel} />
        </div>
        <p className="introduction__body is-28">
          Currently {currentStatus} at{" "}
          <OutboundLink
            eventLabel={`Introduction - ${location}`}
            target="_blank"
            to={locationLink}
          >
            {location}
          </OutboundLink>
          .
        </p>
      </SectionWrapper>
      {/* <SectionWrapper className="contact-links introduction__contacts">
        <p className="is-28">
          <OutboundLink
            eventLabel="Introduction - GitHub"
            target="_blank"
            to="https://github.com/zhuhanming"
          >
            github.
          </OutboundLink>
          <OutboundLink
            eventLabel="Introduction - LinkedIn"
            target="_blank"
            to="https://www.linkedin.com/in/hanming-zhu/"
          >
            linkedin.
          </OutboundLink>
          <OutboundLink
            eventLabel="Introduction - Email"
            to="mailto:hanming@huawen.com"
          >
            email.
          </OutboundLink>
        </p>
      </SectionWrapper> */}
    </>
  );
};

export default Introduction;
