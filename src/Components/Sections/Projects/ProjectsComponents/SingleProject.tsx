import styles from "./Project.module.css";
import { IProjectsInfo } from "../../../../Info/ProjectsInfo";

import TechStackItem from "./TechStackItem";
import ProjButton from "./ProjButton";

const SingleProject = ({
  title,
  techStack,
  desc,
  buttons,
  imgSrc,
  alternate,
}: IProjectsInfo) => {
  const renderTechStack = () => {
    if (techStack.length <= 0) {
      return;
    }
    const returnStack: React.ReactNode[] = [];
    techStack.forEach((tech) => {
      returnStack.push(<TechStackItem tech={tech} key={tech} />);
    });

    return returnStack;
  };

  const getButtons = () => {
    const returnButtons: React.ReactNode[] = [];
    if (buttons.live !== "") {
      returnButtons.push(
        <ProjButton key="btn-live" link={buttons.live}>
          Live
        </ProjButton>
      );
    }
    if (buttons.frontend !== "") {
      returnButtons.push(
        <ProjButton key="btn-frntd" link={buttons.frontend}>
          Frontend Repo
        </ProjButton>
      );
    }
    if (buttons.backend !== "") {
      returnButtons.push(
        <ProjButton key="btn-bcknd" link={buttons.backend}>
          Backend Repo
        </ProjButton>
      );
    }
    return returnButtons;
  };

  return (
    <div
      className={
        alternate
          ? styles.altSingleProjectContainer
          : styles.singleProjectContainer
      }
    >
      <div className={styles.projInfoContainer}>
        <h5 className={styles.projTitle}>
          <a
            href={buttons.live}
            target="_blank"
            rel="noreferrer"
            className={styles.titleLink}
          >
            {title}
          </a>
        </h5>
        <div className={styles.techStackContainer}>{renderTechStack()}</div>
        <p className={styles.projDesc}>{desc}</p>
        <div className={styles.buttonsContainer}>{getButtons()}</div>
      </div>
      <div className={styles.imgContainer}>
        <img
          className={styles.img}
          src={imgSrc}
          alt={"Project Thumbnail - " + title}
        />
      </div>
    </div>
  );
};

export default SingleProject;
