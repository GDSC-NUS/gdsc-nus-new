import { ReactElement } from "react";
import { OutboundLink } from "react-ga";

import "./Footer.scss";

const Footer = (): ReactElement<void, "div"> => {
  return (
    <div className="my-footer">
      <div className="is-32 is-bold my-footer__title">Contact</div>
      <div className="contact-links is-28 my-footer__contacts">
        <div>
          <OutboundLink
            className="is-reversed"
            eventLabel="Footer - GitHub"
            target="_blank"
            to="https://github.com/joelwongjy"
          >
            GitHub
          </OutboundLink>
        </div>
        <div>
          <OutboundLink
            className="is-reversed"
            eventLabel="Footer - LinkedIn"
            target="_blank"
            to="https://www.linkedin.com/in/joelwongjy/"
          >
            LinkedIn
          </OutboundLink>
        </div>
        <div>
          <OutboundLink
            className="is-reversed"
            eventLabel="Footer - Email"
            to="mailto:joelwongjy@gmail.com"
          >
            Email
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
      </div>
    </div>
  );
};

export default Footer;
