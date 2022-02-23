import { ReactElement } from "react";

import Anchor from "../../components/anchor/Anchor";
import { HackForGood } from "data/hackForGood";

import "./HackathonHeader.scss";

const HackathonHeader = (): ReactElement<void, "div"> => {
  const { year, date, caption, link, linkMessage } = HackForGood;

  return (
    <div className="hackathon-header">
      <figure className="hackathon-header__image">
        <img
          alt="hackforgood-logo"
          src="https://dsc.comp.nus.edu.sg/static/media/hfg2022_logo.fc0c3eaf.svg"
        />
      </figure>
      <div className="hackathon-header__details">
        <h2 className="hackathon-header__details-title is-72 is-bold">
          Hack For Good {year}
        </h2>
        <div className="is-36 is-grey">{date}</div>
        <div className="is-32">{caption}</div>
        <Anchor className="is-32" link={link}>
          {linkMessage}
        </Anchor>
      </div>
    </div>
  );
};

export default HackathonHeader;
