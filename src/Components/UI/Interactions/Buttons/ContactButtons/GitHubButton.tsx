import { LiaGithubSquare } from "react-icons/lia";

import ContactButton from "../ContactButtonComponents/ContactButton";

const GitHubButton = () => {
  return (
    <ContactButton Icon={LiaGithubSquare} contact={"GitHub"} modifySize={2.5} />
  );
};

export default GitHubButton;
