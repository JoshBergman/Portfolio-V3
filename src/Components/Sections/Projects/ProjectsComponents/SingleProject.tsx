import styles from "./Project.module.css";
import { IProjectsInfo } from "../../../../Info/ProjectsInfo";

import TechStackItem from "./TechStackItem";
import ProjButton from "./ProjButton";

const SingleProject = (
  { title, techStack, desc, buttons, imgSrc }: IProjectsInfo,
  alternate: boolean
) => {
  const renderTechStack = () => {
    if (techStack.length <= 0) {
      return;
    }
    const returnStack: React.ReactNode[] = [];
    techStack.forEach((tech) => {
      returnStack.push(<TechStackItem tech={tech} />);
    });

    return returnStack;
  };

  const getButtons = () => {
    const returnButtons: React.ReactNode[] = [];
    if (buttons.live !== "") {
      returnButtons.push(<ProjButton link={buttons.live}>Live</ProjButton>);
    }
    if (buttons.frontend !== "") {
      returnButtons.push(
        <ProjButton link={buttons.frontend}>Frontend Repo</ProjButton>
      );
    }
    if (buttons.backend !== "") {
      returnButtons.push(
        <ProjButton link={buttons.backend}>Backend Repo</ProjButton>
      );
    }
    return returnButtons;
  };

  return (
    <div className={styles.singleProjectContainer}>
      {!alternate && (
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src={imgSrc}
            alt={"Project Thumbnail - " + title}
          />
        </div>
      )}
      <div className={styles.projInfoContainer}>
        <h5 className={styles.projTitle}>{title}</h5>
        <div className={styles.techStackContainer}>{renderTechStack()}</div>
        <p className={styles.projDesc}>{desc}</p>
        <div className={styles.buttonsContainer}>{getButtons()}</div>
      </div>
      {alternate && (
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src={imgSrc}
            alt={"Project Thumbnail - " + title}
          />
        </div>
      )}
    </div>
  );
};

export default SingleProject;
