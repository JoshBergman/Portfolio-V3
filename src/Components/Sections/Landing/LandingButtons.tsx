import { useEffect, useState } from "react";

import AboutNavBtn from "../../UI/Interactions/Buttons/NavigationButtons/AboutNavBtn";
import ContactNavBtn from "../../UI/Interactions/Buttons/NavigationButtons/ContactNavBtn";
import ProjectsNavBtn from "../../UI/Interactions/Buttons/NavigationButtons/ProjectsNavBtn";
import TimelineNavBtn from "../../UI/Interactions/Buttons/NavigationButtons/TimelineNavBtn";

import styles from "./LandingButtons.module.css";

const LandingButtons = () => {
  const [btn1, setBtn1] = useState(0);
  const [btn2, setBtn2] = useState(0);
  const [btn3, setBtn3] = useState(0);
  const [btn4, setBtn4] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setBtn1(100);
    }, 200);
    setTimeout(() => {
      setBtn2(100);
    }, 400);
    setTimeout(() => {
      setBtn3(100);
    }, 600);
    setTimeout(() => {
      setBtn4(100);
    }, 800);
  }, []);

  return (
    <div className={styles.buttonsContainer}>
      <TimelineNavBtn opacity={btn1} />
      <ProjectsNavBtn opacity={btn2} />
      <AboutNavBtn opacity={btn3} />
      <ContactNavBtn opacity={btn4} />
    </div>
  );
};

export default LandingButtons;
