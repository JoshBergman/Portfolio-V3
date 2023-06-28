import SectionHeading from "../../UI/UIComponents/SectionHeading";
import ActualTimeline from "./ActualTimeline/ActualTimeline";

import styles from "./ActualTimeline/ActualTimeline.module.css";

const Timeline = () => {
  return (
    <div id="timeline" className="blue-section">
      <SectionHeading offWhite={false}>My Developer Timeline</SectionHeading>
      <div className={styles.timelineContainer}>
        <ActualTimeline />
      </div>
    </div>
  );
};

export default Timeline;
