import { useState } from "react";

import styles from "./ProjectsComponents/Project.module.css";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import projectsInfo, { IProjectsInfo } from "../../../Info/ProjectsInfo";
import additionalProjectsInfo from "../../../Info/AdditionalProjectsInfo";

import SectionHeading from "../../UI/UIComponents/SectionHeading";
import SingleProject from "./ProjectsComponents/SingleProject";

const Projects = () => {
  const [showingMore, setShowingMore] = useState(false);
  const highlightedProjects = projectsInfo;
  const additionalProjects = additionalProjectsInfo;

  const getProjects = (projects: IProjectsInfo[]) => {
    const returnProjects: React.ReactNode[] = [];
    projects.forEach((proj, i) => {
      let thisProjIsAlt = i % 2 !== 0 ? true : false;
      if (
        projects[0].title === additionalProjects[0].title &&
        highlightedProjects.length % 2 !== 0
      ) {
        thisProjIsAlt = !thisProjIsAlt;
      }
      returnProjects.push(
        <SingleProject
          title={proj.title}
          desc={proj.desc}
          techStack={proj.techStack}
          buttons={proj.buttons}
          imgSrc={proj.imgSrc}
          key={proj.title}
          alternate={thisProjIsAlt}
        />
      );
    });

    return returnProjects;
  };

  const toggleShowingMore = () => {
    setShowingMore((prevState) => !prevState);
  };

  return (
    <div id="projects" className="white-section">
      <SectionHeading offWhite={true}>Projects</SectionHeading>
      {getProjects(highlightedProjects)}
      {showingMore && getProjects(additionalProjects)}
      <div className={styles.btnContainer}>
        {!showingMore && (
          <button className={styles.seeMoreBtn} onClick={toggleShowingMore}>
            See More Projects
            <FaCaretDown className={styles.moreIcon} />
          </button>
        )}
        {showingMore && (
          <button className={styles.seeLessBtn} onClick={toggleShowingMore}>
            <FaCaretUp className={styles.moreIcon} />
            See Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
