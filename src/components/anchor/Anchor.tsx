import { ReactElement, ReactNode } from "react";

interface AnchorProps {
  link: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

const Anchor = ({
  link,
  className = "",
  onClick,
  children,
}: AnchorProps): ReactElement<AnchorProps, "a"> => {
  return (
    <a
      className={className ? className : ""}
      href={link}
      onClick={onClick}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
};

export default Anchor;
