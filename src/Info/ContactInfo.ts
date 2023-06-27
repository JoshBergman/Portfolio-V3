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
};

export default contactInfo;
