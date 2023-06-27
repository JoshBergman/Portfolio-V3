import { AiOutlineLinkedin } from "react-icons/ai";

import ContactButton from "../ContactButtonComponents/ContactButton";

const LinkedInButton = () => {
  return (
    <ContactButton
      Icon={AiOutlineLinkedin}
      contact={"LinkedIn"}
      modifySize={-3}
      marginTop={3.5}
    />
  );
};

export default LinkedInButton;
