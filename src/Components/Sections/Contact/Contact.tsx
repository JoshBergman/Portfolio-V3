import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

import styles from "./Contact.module.css";
import contactInfo from "../../../Info/ContactInfo";

import SectionHeading from "../../UI/UIComponents/SectionHeading";
import Plug from "./Plug";
import EmailButton from "../../UI/Interactions/Buttons/ContactButtons/EmailButton";
import GitHubButton from "../../UI/Interactions/Buttons/ContactButtons/GitHubButton";
import LinkedInButton from "../../UI/Interactions/Buttons/ContactButtons/LinkedInButton";
import ResumeButton from "../../UI/Interactions/Buttons/ContactButtons/ResumeButton";
import Copyright from "../../UI/Miscellaneous/Copyright/Copyright";

const Contact = () => {
  return (
    <div id="contact" className="white-section">
      <SectionHeading offWhite={true}>Conatct Me</SectionHeading>
      <div className={styles.plugsContainer}>
        <Plug
          link={contactInfo.Email.link}
          userName={contactInfo.Email.text}
          btn={<EmailButton />}
        >
          Email
        </Plug>
        <Plug
          link={contactInfo.GitHub.link}
          userName={contactInfo.GitHub.text}
          btn={<GitHubButton />}
        >
          GitHub
        </Plug>
        <Plug
          link={contactInfo.LinkedIn.link}
          userName={contactInfo.LinkedIn.text}
          btnMove="4px, 6px"
          btn={<LinkedInButton />}
        >
          LinkedIn
        </Plug>
        <Plug
          link={contactInfo.Resume.link}
          userName={contactInfo.Resume.text}
          btnMove="7px, 5px"
          btn={<ResumeButton />}
        >
          Resume
        </Plug>
      </div>
      <div className={styles.backToTopBtn}>
        <Link smooth={true} to="landing">
          <FaArrowUp />
        </Link>
      </div>
      <Copyright />
    </div>
  );
};

export default Contact;
