import { AiOutlineLinkedin } from "react-icons/ai";

import ContactButton from "../ContactButtonComponents/ContactButton";

const LinkedInButton = () => {
  return (
    <ContactButton
      Icon={AiOutlineLinkedin}
      contact={"LinkedIn"}
      modifySize={-2.2}
    />
  );
};

export default LinkedInButton;
