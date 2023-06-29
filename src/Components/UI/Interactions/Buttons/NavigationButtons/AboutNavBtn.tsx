import NavigationButton from "../NavigationButtonComponents/NavigationButton";

const AboutNavBtn = (style: React.CSSProperties) => {
  return (
    <NavigationButton href={"about"} style={style}>
      About
    </NavigationButton>
  );
};

export default AboutNavBtn;
