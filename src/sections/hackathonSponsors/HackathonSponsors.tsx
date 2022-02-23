import { ReactElement } from "react";
import SectionHeading from "../../components/section/SectionHeading";
import SectionWrapper from "../../components/section/SectionWrapper";

import { HackForGood } from "data/hackForGood";

import "./HackathonSponsors.scss";

const HackathonSponsors = (): ReactElement<void, typeof SectionWrapper> => {
  const { sponsors } = HackForGood;
  return (
    <SectionWrapper isWide>
      <SectionHeading increasedMarginTop title="Sponsors" />
      <div className="hackathon-sponsors is-32">
        <p className="hackathon-sponsors__title">Gold Sponsors</p>
        <div className="hackathon-sponsors__logos gold">
          {sponsors["Gold"].map((sponsor) => (
            <img className="gold" alt={sponsor.name} src={sponsor.image} />
          ))}
        </div>
        <p className="hackathon-sponsors__title">Silver Sponsors</p>
        <div className="hackathon-sponsors__logos silver">
          {sponsors["Silver"].map((sponsor) => (
            <img className="silver" alt={sponsor.name} src={sponsor.image} />
          ))}
        </div>
        <p className="hackathon-sponsors__title">Bronze Sponsors</p>
        <div className="hackathon-sponsors__logos bronze">
          {sponsors["Bronze"].map((sponsor) => (
            <img className="bronze" alt={sponsor.name} src={sponsor.image} />
          ))}
        </div>
        <p className="hackathon-sponsors__title">Supported by</p>
        <div className="hackathon-sponsors__logos bronze">
          {sponsors["Supported"].map((sponsor) => (
            <img className="gold" alt={sponsor.name} src={sponsor.image} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HackathonSponsors;
