import { FiGithub } from "react-icons/fi";

import ContactButton from "../ContactButtonComponents/ContactButton";

const GitHubButton = () => {
  return <ContactButton Icon={FiGithub} contact={"Email"} />;
};

export default GitHubButton;
