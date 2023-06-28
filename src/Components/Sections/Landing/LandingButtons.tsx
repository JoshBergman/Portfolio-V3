import AboutNavBtn from "../../UI/Interactions/Buttons/NavigationButtons/AboutNavBtn";
import ContactNavBtn from "../../UI/Interactions/Buttons/NavigationButtons/ContactNavBtn";
import ProjectsNavBtn from "../../UI/Interactions/Buttons/NavigationButtons/ProjectsNavBtn";
import TimelineNavBtn from "../../UI/Interactions/Buttons/NavigationButtons/TimelineNavBtn";

import styles from "./LandingButtons.module.css";

const LandingButtons = () => {
  return (
    <div className={styles.buttonsContainer}>
      <TimelineNavBtn />
      <ProjectsNavBtn />
      <AboutNavBtn />
      <ContactNavBtn />
    </div>
  );
};

export default LandingButtons;
