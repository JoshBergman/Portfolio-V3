import NavigationButton from "../NavigationButtonComponents/NavigationButton";

const ContactNavBtn = (style: React.CSSProperties) => {
  return (
    <NavigationButton href={"contact"} style={style}>
      Contact
    </NavigationButton>
  );
};

export default ContactNavBtn;
