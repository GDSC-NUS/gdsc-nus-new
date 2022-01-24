import { ReactElement } from "react";
import { OutboundLink } from "react-ga";

import SkillIcon from "components/skillIcon/SkillIcon";
import { Project } from "data/projects";
import { processSmallerCloudinaryUrl } from "utils/imageUtils";

import "./ProjectGalleryItem.scss";

interface ProjectGalleryItemProps {
  project: Project;
}

const ProjectGalleryItem = (
  props: ProjectGalleryItemProps
): ReactElement<ProjectGalleryItemProps, "div"> => {
  const { project } = props;
  const { title, summary, primaryLink, primaryMessage, image, skills } =
    project;
  return (
    <div className="project-gallery-item">
      {image && (
        <div className="project-gallery-item__image">
          <figure className="image is-16by9">
            {primaryLink ? (
              <OutboundLink
                eventLabel={`Project (Main) - ${title}`}
                target="_blank"
                to={primaryLink}
              >
                {<img alt={title} src={processSmallerCloudinaryUrl(image)} />}
              </OutboundLink>
            ) : (
              <img alt={title} src={processSmallerCloudinaryUrl(image)} />
            )}
          </figure>
        </div>
      )}
      <div className="project-gallery-item__details">
        <div className="is-32 is-bold project-gallery-item__details-title">
          {title}
        </div>
        <p className="is-24 is-grey" key={`${title}-desc`}>
          {summary}
        </p>
        <div className="icons-wrapper">
          {skills.map((skill) => (
            <SkillIcon
              isSmall={true}
              key={`project-gallery-item-${title}-${skill as string}`}
              skill={skill}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGalleryItem;
