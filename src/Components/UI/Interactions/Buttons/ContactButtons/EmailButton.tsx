import { AiOutlineMail } from "react-icons/ai";

import ContactButton from "../ContactButtonComponents/ContactButton";

const EmailButton = () => {
  return <ContactButton Icon={AiOutlineMail} contact={"Email"} />;
};

export default EmailButton;
