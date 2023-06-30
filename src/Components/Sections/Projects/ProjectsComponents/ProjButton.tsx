import NavigationButton from "../../../UI/Interactions/Buttons/NavigationButtonComponents/NavigationButton";

interface IProjButtonProps {
  link: string;
  children: string;
}

const ProjButton = ({ link, children }: IProjButtonProps) => {
  return (
    <NavigationButton realLink={true} href={link} padding={"5px 10px"}>
      {children}
    </NavigationButton>
  );
};

export default ProjButton;
