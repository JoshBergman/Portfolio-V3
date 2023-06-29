import NavigationButton from "../NavigationButtonComponents/NavigationButton";

const ProjectsNavBtn = (style: React.CSSProperties) => {
  return (
    <NavigationButton href={"projects"} style={style}>
      Projects
    </NavigationButton>
  );
};

export default ProjectsNavBtn;
