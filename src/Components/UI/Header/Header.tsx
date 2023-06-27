import EmailButton from "../Interactions/Buttons/ContactButtons/EmailButton";
import GitHubButton from "../Interactions/Buttons/ContactButtons/GitHubButton";
import LinkedInButton from "../Interactions/Buttons/ContactButtons/LinkedInButton";

const Header = () => {
  return (
    <header>
      <div>
        <EmailButton />
        <GitHubButton />
        <LinkedInButton />
      </div>
    </header>
  );
};

export default Header;
