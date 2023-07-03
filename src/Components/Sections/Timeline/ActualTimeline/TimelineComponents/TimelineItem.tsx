import styles from "./Timeline.module.css";

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
  const currHighlighted = displayState === thisIndex ? true : false;

  const clickTimelineEventHandler = () => {
    setDisplayState(thisIndex);
  };

  const buttonBackground = currHighlighted
    ? "var(--brandDarkPrimary-color)"
    : "var(--brandSecondary-color)";
  const buttonStyle = {
    backgroundColor: buttonBackground,
  };

  return (
    <div
      className={styles.timelineBlipBtn}
      onClick={clickTimelineEventHandler}
      style={buttonStyle}
    />
  );
};

export default TimelineItem;
