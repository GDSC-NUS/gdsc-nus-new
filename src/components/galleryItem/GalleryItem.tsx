import { ReactElement } from "react";
import { OutboundLink } from "react-ga";

import { Event } from "data/events";
import { processSmallerCloudinaryUrl } from "utils/imageUtils";

import "./GalleryItem.scss";

interface GalleryItemProps {
  event: Event;
}

const GalleryItem = (
  props: GalleryItemProps
): ReactElement<GalleryItemProps, "div"> => {
  const { event } = props;
  const { title, primaryLink, image, summary } = event;
  return (
    <div className="gallery-item">
      {image && (
        <div className="gallery-item__image">
          <figure className="image is-16by9">
            {primaryLink ? (
              <OutboundLink
                eventLabel={`Item - ${title}`}
                target="_blank"
                to={primaryLink}
              >
                {<img alt={title} src={processSmallerCloudinaryUrl(image)} />}
              </OutboundLink>
            ) : (
              <img alt={title} src={processSmallerCloudinaryUrl(image)} />
            )}
          </figure>
        </div>
      )}
      <div className="gallery-item__details">
        <div className="is-32 is-bold gallery-item__details-title">{title}</div>
      </div>
      <p className="is-24 is-grey" key={`${title}-desc`}>
        {summary}
      </p>
    </div>
  );
};

export default GalleryItem;
