import { useState } from "react";

import styles from "./ActualTimeline.module.css";
import timelineInfo from "../../../../Info/TimelineInfo";

import TimelineItem from "./TimelineComponents/TimelineItem";
import FullItemDesc from "./TimelineComponents/FullItemDesc";

const ActualTimeline = () => {
  const [timelineDisplayState, setTimelineDisplayState] = useState(-1);

  const renderTimelineItems = () => {
    const events = timelineInfo.concat([]);
    const timeLineItems = events.map((event, index) => (
      <TimelineItem
        info={event}
        thisIndex={index}
        key={event.title}
        setDisplayState={setTimelineDisplayState}
      />
    ));

    return timeLineItems;
  };

  return (
    <div className={styles.verticalAlignContainer}>
      <div className={styles.breathingRoom}>
        <div className={styles.baseLine}>{renderTimelineItems()}</div>
      </div>
      <div className={styles.breathingRoom}>
        <FullItemDesc />
      </div>
    </div>
  );
};

export default ActualTimeline;
