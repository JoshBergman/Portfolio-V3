import styles from "./About.module.css";

import SectionHeading from "../../UI/UIComponents/SectionHeading";
import MyHistory from "./AboutComponents/HistoryComponents/MyHistory";
import MyStack from "./AboutComponents/StackComponents/MyStack";

const About = () => {
  return (
    <div id="about" className="blue-section">
      <SectionHeading offWhite={false}>About</SectionHeading>
      <div className={styles.aboutContainer}>
        <MyStack />
        <MyHistory />
      </div>
    </div>
  );
};

export default About;
