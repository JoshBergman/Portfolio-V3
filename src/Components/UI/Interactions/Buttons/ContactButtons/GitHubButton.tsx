import { LiaGithubSquare } from "react-icons/lia";

import ContactButton from "../ContactButtonComponents/ContactButton";

const GitHubButton = () => {
  return <ContactButton Icon={LiaGithubSquare} contact={"GitHub"} />;
};

export default GitHubButton;
