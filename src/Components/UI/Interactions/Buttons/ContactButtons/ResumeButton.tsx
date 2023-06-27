import { BsFileEarmarkPerson } from "react-icons/bs";

import ContactButton from "../ContactButtonComponents/ContactButton";

const ResumeButton = () => {
  return (
    <ContactButton
      Icon={BsFileEarmarkPerson}
      contact={"Resume"}
      modifySize={-5}
    />
  );
};

export default ResumeButton;
