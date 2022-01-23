import { ReactElement, ReactNode } from "react";

interface SectionWrapperProps {
  className?: string;
  isWide?: boolean;
  minHeight?: number;
  children: ReactNode;
}

const SectionWrapper = ({
  className,
  isWide,
  minHeight,
  children,
}: SectionWrapperProps): ReactElement<SectionWrapperProps, "section"> => {
  return (
    <section
      className={className ? `columns ${className}` : "columns"}
      style={minHeight != null ? { minHeight } : {}}
    >
      <div
        className={`column ${
          isWide
            ? "is-full-desktop is-full-mobile is-full-tablet"
            : "is-two-thirds-desktop is-full-mobile is-three-quarters-tablet"
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
