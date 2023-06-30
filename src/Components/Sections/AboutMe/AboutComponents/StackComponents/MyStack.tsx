import { useState } from "react";
import SkillsCard from "./SkillsCard";

import styles from "./Skills.module.css";

import skillsInfo from "../../../../../Info/SkillsInfo";
import Tab from "./Tab";

const MyStack = () => {
  const [skillInfoState, setSkillInfoState] = useState(0);
  const currSkillsInfo = skillsInfo[skillInfoState];

  const updateInfoState = (newIndex: number) => {
    setSkillInfoState(newIndex);
  };

  const getListItems = () => {
    const listItems: React.ReactNode[] = [];
    currSkillsInfo.skills.forEach((tech) => {
      const Icon = tech[0];
      listItems.push(
        <li key={tech[1]}>
          <Icon className={styles.skillIcon} /> {tech[1]}
        </li>
      );
    });

    return listItems;
  };

  const getTabs = () => {
    const tabs: React.ReactNode[] = [];
    skillsInfo.forEach((skill, index) =>
      tabs.push(
        <Tab
          key={skill.title + "-tab"}
          updateInfoState={updateInfoState}
          tabName={skill.title}
          infoState={skillInfoState}
          tabIndex={index}
        />
      )
    );
    return tabs;
  };

  return (
    <div className={styles.skillsContainer}>
      <h5 className={styles.heading}>Technical Skills</h5>
      <div className={styles.tabsContainer}>{getTabs()}</div>
      <SkillsCard>{getListItems()}</SkillsCard>
    </div>
  );
};

export default MyStack;
