import MikesFrameService from "./ProjectsPhotos/MikesFrameService.png";
import QuickBudgetTool from "./ProjectsPhotos/QuickBudgetTool.png";

import { IProjectsInfo } from "./ProjectsInfo";

const additionalProjectsInfo: IProjectsInfo[] = [
  {
    title: "Mikes Frame Service",
    techStack: ["React", "Freelance"],
    desc: "Landing page prototype for a local vehicle frame shop. Increased the conversion rate for new potential customers significantly. (Around 50%)",
    buttons: {
      live: "https://mikesframe-25201.web.app/home",
      frontend: "https://github.com/JoshBergman/MikesFrameServiceV2",
      backend: "",
    },
    imgSrc: MikesFrameService,
  },
  {
    title: "Quick Budget Tool",
    techStack: ["MERN", "Jest", "ES", "MSW"],
    desc: "QuickBudgetTool is one of my first full-stack applications. QBT is a tool for quickly analyzing and visualizing your budget. A strength of QBT is to theorize about possible future budgets. (Although I have completely deprecated the backend, feel free to view the still functional frontend)",
    buttons: {
      live: "https://quickbudgettool.com/",
      frontend: "https://github.com/JoshBergman/QBT2",
      backend: "https://github.com/JoshBergman/qbt2-backend",
    },
    imgSrc: QuickBudgetTool,
  },
];

export default additionalProjectsInfo;

// Displayed first to last by index.
// If a button property is left blank it will not be rendered. ex: live: ""

// import images from ../ProjectsPhotos/yourphotoshere
