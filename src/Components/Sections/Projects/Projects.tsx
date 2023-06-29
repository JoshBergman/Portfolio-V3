import projectsInfo from "../../../Info/ProjectsInfo";

import SectionHeading from "../../UI/UIComponents/SectionHeading";
import SingleProject from "./ProjectsComponents/SingleProject";

const Projects = () => {
  const getProjects = () => {
    const returnProjects: React.ReactNode[] = [];
    projectsInfo.forEach((proj, i) => {
      const thisProjIsAlt = i % 2 !== 0 ? true : false;
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

  return (
    <div id="projects" className="white-section">
      <SectionHeading offWhite={true}>Projects</SectionHeading>
      {getProjects()}
    </div>
  );
};

export default Projects;
