import NavigationButton from "../NavigationButtonComponents/NavigationButton";

const ReposNavBtn = (style: React.CSSProperties) => {
  return (
    <NavigationButton href={"repos"} style={style}>
      Repositories
    </NavigationButton>
  );
};

export default ReposNavBtn;
