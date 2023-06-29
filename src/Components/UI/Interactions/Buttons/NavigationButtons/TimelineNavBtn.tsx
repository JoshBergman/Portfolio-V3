import NavigationButton from "../NavigationButtonComponents/NavigationButton";

const TimelineNavBtn = (style: React.CSSProperties) => {
  return (
    <NavigationButton href={"timeline"} style={style}>
      Timeline
    </NavigationButton>
  );
};

export default TimelineNavBtn;
