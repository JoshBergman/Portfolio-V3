interface IContactInfo {
  [index: string]: { link: string; text: string };
}

const contactInfo: IContactInfo = {
  Email: {
    link: "mailto:josh.bergman1@pm.me",
    text: "josh.bergman1@pm.me",
  },
  GitHub: {
    link: "https://github.com/JoshBergman",
    text: "JoshBergman",
  },
  LinkedIn: {
    link: "https://www.linkedin.com/in/joshua-bergman-399133191/",
    text: "Joshua Bergman",
  },
  Resume: {
    link: "https://joshuabergman.dev/Resources/resume.pdf",
    text: "View or Download My Resume",
    // Add your up-to-date resume in PDF format to:
    // {portoflioRoot}/public/Resources/resume.pdf

    //! You will need your host domain to get your resume to load correctly
    //! The link for resume is just a link to your project public dir / resources / resume.pdf
  },
};

export default contactInfo;
