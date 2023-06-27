import EmailButton from "../Interactions/Buttons/ContactButtons/EmailButton";
import GitHubButton from "../Interactions/Buttons/ContactButtons/GitHubButton";
import LinkedInButton from "../Interactions/Buttons/ContactButtons/LinkedInButton";
import ResumeButton from "../Interactions/Buttons/ContactButtons/ResumeButton";

const Header = () => {
  return (
    <header>
      <div>
        <EmailButton />
        <GitHubButton />
        <LinkedInButton />
        <ResumeButton />
      </div>
    </header>
  );
};

export default Header;
