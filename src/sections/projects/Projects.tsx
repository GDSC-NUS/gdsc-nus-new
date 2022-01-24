import { ReactElement } from "react";
import { useState } from "react";
import { scroller as scroll } from "react-scroll";
import SectionHeading from "components/section/SectionHeading";
import SectionWrapper from "components/section/SectionWrapper";
import ProjectGalleryItem from "components/projectGalleryItem/ProjectGalleryItem";
import { project } from "data/projects";

import "./Projects.scss";

const Projects = (): ReactElement<void, typeof SectionWrapper> => {
  const { regularTitle, projects } = project;
  const [showAll, setShowAll] = useState<boolean>(false);
  const displayedProjects = projects
    .filter((project) => !project.isFavourite)
    .filter((project) => project.isShown !== false);

  const onShowClick = (): void => {
    if (showAll) {
      scroll.scrollTo("projects", { offset: 58 });
    }
    setShowAll((showAll) => !showAll);
  };

  return (
    <SectionWrapper className="projects" isWide={true}>
      <SectionHeading increasedMarginTop={true} title={regularTitle} />
      <div className="projects-gallery">
        {displayedProjects
          .slice(0, showAll ? undefined : 3)
          .map((project, index) => (
            <ProjectGalleryItem
              key={`coding-project-${index}`}
              project={project}
            />
          ))}
      </div>
      {displayedProjects.length > 3 && (
        <p className="is-28 is-bold other-projects-show-more">
          <button className="is-like-link" onClick={onShowClick}>
            {showAll ? "Show Less." : "Show More."}
          </button>
        </p>
      )}
    </SectionWrapper>
  );
};

export default Projects;
