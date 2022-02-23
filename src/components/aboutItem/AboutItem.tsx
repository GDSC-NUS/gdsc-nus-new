import { ReactElement } from "react";
import { OutboundLink } from "react-ga";

import { About } from "data/about";
import { processCloudinaryUrl } from "utils/imageUtils";

import "./AboutItem.scss";

interface AboutItemProps {
  item: About;
}

const AboutItem = (
  props: AboutItemProps
): ReactElement<AboutItemProps, "div"> => {
  const { item } = props;
  const {
    title,
    descriptions,
    primaryMessage,
    primaryLink,
    secondaryMessage,
    secondaryLink,
    image,
  } = item;
  return (
    <div className="about-item">
      <div className="about-item__details">
        <div className="is-68 about-item__details-title">{title}</div>
        {descriptions.map((description, index) => (
          <p className="is-28 is-grey" key={`${title}-desc-${index}`}>
            {description}
          </p>
        ))}
        <div
          className={`is-28 about-item__link${
            secondaryMessage && secondaryLink ? " has-secondary" : ""
          }`}
        >
          <OutboundLink
            className="is-reversed"
            eventLabel={`About (Primary) - ${title}`}
            to={primaryLink}
          >
            {primaryMessage}
          </OutboundLink>
        </div>
        <div className="is-28 about-item__link">
          {secondaryMessage && secondaryLink && (
            <OutboundLink
              className="is-reversed"
              eventLabel={`About (Secondary) - ${title}`}
              to={secondaryLink}
            >
              {secondaryMessage}
            </OutboundLink>
          )}
        </div>
      </div>
      {image && (
        <div className="about-item__image">
          <figure className="image is-3by2">
            <img alt={title} src={processCloudinaryUrl(image)} />
          </figure>
        </div>
      )}
    </div>
  );
};

export default AboutItem;
