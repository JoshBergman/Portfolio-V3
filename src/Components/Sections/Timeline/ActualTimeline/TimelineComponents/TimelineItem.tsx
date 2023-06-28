import { useState } from "react";

import styles from "./Timeline.module.css";
import ItemTitle from "./ItemTitle";

interface ITimelineItemProps {
  info: {
    title: string;
    desc: React.ReactNode;
    date: string;
  };
  thisIndex: number;
  setDisplayState: React.Dispatch<React.SetStateAction<number>>;
  displayState: number;
}

const TimelineItem = ({
  info,
  thisIndex,
  setDisplayState,
  displayState,
}: ITimelineItemProps) => {
  const [showTitleState, setShowTitleState] = useState(false);
  const currHighlighted = displayState === thisIndex ? true : false;

  const clickTimelineEventHandler = () => {
    setDisplayState(thisIndex);
  };

  const toggleTitleState = () => {
    setShowTitleState((prevState) => !prevState);
  };

  const buttonBackground = currHighlighted
    ? "var(--brandSecondary-color)"
    : "var(--brandLightPrimary-color)";
  const buttonStyle = {
    backgroundColor: buttonBackground,
  };

  return (
    <button
      className={styles.timelineBlipBtn}
      onClick={clickTimelineEventHandler}
      onMouseEnter={toggleTitleState}
      onMouseLeave={toggleTitleState}
      style={buttonStyle}
    >
      {showTitleState && <ItemTitle title={info.title} />}
    </button>
  );
};

export default TimelineItem;
