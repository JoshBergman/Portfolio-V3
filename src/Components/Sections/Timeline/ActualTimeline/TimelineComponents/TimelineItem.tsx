import { useState } from "react";

import styles from "./Timeline.module.css";
import ItemTitle from "./ItemTitle";

interface ITimelineItemProps {
  info: {
    title: string;
    desc: string;
    date: string;
  };
  thisIndex: number;
  setDisplayState: React.Dispatch<React.SetStateAction<number>>;
}

const TimelineItem = ({
  info,
  thisIndex,
  setDisplayState,
}: ITimelineItemProps) => {
  const [showTitleState, setShowTitleState] = useState(false);

  const clickTimelineEventHandler = () => {
    setDisplayState(thisIndex);
  };

  const toggleTitleState = () => {
    setShowTitleState((prevState) => !prevState);
  };

  return (
    <button
      className={styles.timelineBlipBtn}
      onClick={clickTimelineEventHandler}
      onMouseEnter={toggleTitleState}
      onMouseLeave={toggleTitleState}
    >
      {showTitleState && <ItemTitle title={info.title} />}
    </button>
  );
};

export default TimelineItem;
