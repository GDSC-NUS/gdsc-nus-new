import { ReactElement } from "react";
import { OutboundLink } from "react-ga";

import "./Footer.scss";

const Footer = (): ReactElement<void, "div"> => {
  return (
    <div className="my-footer">
      <div className="is-36 is-bold my-footer__title">Contact Us</div>
      <div className="contact-links is-24 is-bold">
        <div>
          <OutboundLink
            className="is-reversed"
            eventLabel="Footer - Instagram"
            target="_blank"
            to="https://instagram.com/dscnus"
          >
            Instagram
          </OutboundLink>
        </div>
        <div>
          <OutboundLink
            className="is-reversed"
            eventLabel="Footer - LinkedIn"
            target="_blank"
            to="https://www.linkedin.com/company/dscnus/"
          >
            LinkedIn
          </OutboundLink>
        </div>
        <div>
          <OutboundLink
            className="is-reversed"
            eventLabel="Footer - Blog"
            target="_blank"
            to="https://youtube.com/joelwongjy"
          >
            YouTube
          </OutboundLink>
        </div>
        <div>
          <OutboundLink
            className="is-reversed"
            eventLabel="Footer - Email"
            to="mailto:lead.dscnus@gmail.com"
          >
            Email
          </OutboundLink>
        </div>
      </div>
      <div className="is-16 is-bold my-footer__copyright">
        © DSC NUS 2019–2022
      </div>
    </div>
  );
};

export default Footer;
