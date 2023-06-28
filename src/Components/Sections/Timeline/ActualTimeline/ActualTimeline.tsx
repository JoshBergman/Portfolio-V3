import React, { useState } from "react";

import styles from "./ActualTimeline.module.css";
import timelineInfo from "../../../../Info/TimelineInfo";

import TimelineItem from "./TimelineComponents/TimelineItem";

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
    <React.Fragment>
      <div className={styles.baseLine}>{renderTimelineItems()}</div>
    </React.Fragment>
  );
};

export default ActualTimeline;
