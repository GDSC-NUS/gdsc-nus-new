import { ReactElement } from "react";

import Anchor from "../anchor/Anchor";

import "./SectionHeading.scss";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  increasedMarginTop?: boolean;
  hasLink?: boolean;
  link?: string;
  linkMessage?: string;
  onClickLink?: () => void;
}

const SectionHeading = (
  props: SectionHeadingProps
): ReactElement<SectionHeadingProps, "div"> => {
  const {
    title,
    subtitle,
    className,
    increasedMarginTop,
    hasLink = false,
    link = "",
    linkMessage = "",
    onClickLink = (): void => undefined,
  } = props;

  return (
    <div
      className={`section-heading${className ? " " + className : ""}${
        increasedMarginTop ? " inc-margin-top" : ""
      }`}
    >
      {/* <div className="section-heading__emoji-container">
        <figure className="image is-48x48">
          <img alt={emojiAlt} src={emoji} />
        </figure>
      </div> */}
      <h2 className="section-heading__title is-64 is-bold">{title}</h2>
      {subtitle && (
        <div className="section-heading__subtitle is-32 is-grey">
          {subtitle}
          {hasLink && (
            <>
              {" "}
              <Anchor link={link} onClick={onClickLink}>
                {linkMessage}
              </Anchor>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
