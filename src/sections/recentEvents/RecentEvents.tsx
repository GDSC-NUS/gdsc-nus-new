import { ReactElement } from "react";
import { useState } from "react";
import { scroller as scroll } from "react-scroll";
import SectionHeading from "components/section/SectionHeading";
import SectionWrapper from "components/section/SectionWrapper";
import GalleryItem from "components/galleryItem/GalleryItem";
import { event } from "data/events";

import "./RecentEvents.scss";

const RecentEvents = (): ReactElement<void, typeof SectionWrapper> => {
  const { title, events } = event;
  const [showAll, setShowAll] = useState<boolean>(false);
  const displayedEvents = events
    .filter((event) => !event.isFavourite)
    .filter((event) => event.isShown !== false);

  const onShowClick = (): void => {
    if (showAll) {
      scroll.scrollTo("projects", { offset: 58 });
    }
    setShowAll((showAll) => !showAll);
  };

  return (
    <SectionWrapper className="recent-events" isWide={true}>
      <SectionHeading increasedMarginTop={true} title={title} />
      <div className="recent-events-gallery">
        {displayedEvents
          .slice(0, showAll ? undefined : 3)
          .map((event, index) => (
            <GalleryItem key={`event-${index}`} event={event} />
          ))}
      </div>
      {displayedEvents.length > 3 && (
        <p className="is-28 is-bold recent-events-show-more">
          <a className="is-like-link" onClick={onShowClick}>
            {showAll ? "Show Less" : "Show More"}
          </a>
        </p>
      )}
    </SectionWrapper>
  );
};

export default RecentEvents;
