import { AiOutlineMail } from "react-icons/ai";

import ContactButton from "../ContactButtonComponents/ContactButton";

const EmailButton = () => {
  return (
    <ContactButton
      Icon={AiOutlineMail}
      contact={"Email"}
      modifySize={1.5}
      marginTop={1}
    />
  );
};

export default EmailButton;
