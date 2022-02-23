import { ReactElement } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SectionHeading from "../../components/section/SectionHeading";
import SectionWrapper from "../../components/section/SectionWrapper";

import { HackForGood } from "data/hackForGood";

import "./HackathonTimeline.scss";

const HackathonTimeline = (): ReactElement<void, typeof SectionWrapper> => {
  const { timeline, openingDate, finaleDate, openingSchedule, finaleSchedule } =
    HackForGood;
  return (
    <SectionWrapper isWide>
      <SectionHeading increasedMarginTop title="Timeline" />
      <VerticalTimeline className="hackathon-timeline" lineColor="#5f6368">
        {timeline.map((event) => (
          <VerticalTimelineElement
            contentStyle={{
              background: "#004aad",
              color: "#fff",
              WebkitBoxShadow: "none",
              borderRadius: "10px",
            }}
            className="vertical-timeline-element--work hackathon-timeline__event"
            date={event.date}
            iconStyle={{ background: "rgb(200, 200, 200)", color: "#fff" }}
          >
            <div className="hackathon-timeline__event">
              <div className="is-28 is-bold">{event.event}</div>
              {event.location && event.time && (
                <div className="is-24">
                  {event.location} | {event.time}
                </div>
              )}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <SectionHeading increasedMarginTop title="Schedule" />
      <div className="hackathon-timeline__schedule">
        <table className="table is-28 hackathon-timeline__table">
          <thead>
            <tr>
              <th colSpan={3}>{openingDate}</th>
            </tr>
          </thead>
          <tbody>
            {openingSchedule.map((event, index) => (
              <tr>
                <td>{event.startTime}</td>
                <td>{event.endTime}</td>
                <td>{event.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table is-28">
          <thead>
            <tr>
              <th colSpan={3}>{finaleDate}</th>
            </tr>
          </thead>
          <tbody>
            {finaleSchedule.map((event, index) => (
              <tr>
                <td>{event.startTime}</td>
                <td>{event.endTime}</td>
                <td>{event.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionWrapper>
  );
};

export default HackathonTimeline;
