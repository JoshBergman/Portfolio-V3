// import MikesFrameService from "./ProjectsPhotos/MikesFrameService.png";
import AutoCL from "./ProjectsPhotos/AutoCL.png";
import AlgoExample from "./ProjectsPhotos/AlgoExample.png";
import TooSimpleAnalytics from "./ProjectsPhotos/TooSimpleAnalytics.png";
// import QuickBudgetTool from "./ProjectsPhotos/QuickBudgetTool.png";

export interface IProjectsInfo {
  title: string;
  techStack: string[];
  desc: string;
  buttons: {
    live: string;
    frontend: string;
    backend: string;
  };
  imgSrc: string;
  alternate?: boolean;
}

const projectsInfo: IProjectsInfo[] = [
  {
    title: "Too Simple Analytics",
    techStack: ["React", "TS", "Node", "Express", "MongoDB"],
    desc: "Too Simple Analytics started out as a personal script for tracking views of my projects. After a while of using this program I started to desire additional features, of which I couldn’t find for a reasonable price from an existing solution. Too Simple Analytics aims to provide a meaningful feature set for an affordable price all while focusing on ease-of-use, privacy, and speed.",
    buttons: {
      live: "https://toosimpleanalytics.com/",
      frontend: "https://github.com/JoshBergman/TooSimpleAnalytics-Frontend",
      backend: "https://github.com/JoshBergman/TooSimpleAnalytics-Backend",
    },
    imgSrc: TooSimpleAnalytics,
  },
  {
    title: "Auto CL",
    techStack: ["React", "TS", "Node", "Express"],
    desc: "Auto CL stands for “Auto Cover-Letter”. It is a lightweight AI web app that bridges the gap between templated cover letters and time-consuming original cover letters. The application allows you to focus on your connection to a company and takes the focus off of writing.",
    buttons: {
      live: "https://autocl-abb1d.web.app",
      frontend: "https://github.com/JoshBergman/AutoCoverLetter",
      backend: "https://github.com/JoshBergman/AutoCoverLetter",
    },
    imgSrc: AutoCL,
  },
  // {
  //   title: "Quick Budget Tool",
  //   techStack: ["MERN", "Jest", "ES", "MSW"],
  //   desc: "QuickBudgetTool excels at rapidly crafting budgets, emphasizing simplicity and speed. While it doesn't serve as an investment tracker or specialized financial application, its strength lies in dissecting your month-to-month cash flow.",
  //   buttons: {
  //     live: "https://quickbudgettool.com/",
  //     frontend: "https://github.com/JoshBergman/QBT2",
  //     backend: "https://github.com/JoshBergman/qbt2-backend",
  //   },
  //   imgSrc: QuickBudgetTool,
  // },
  {
    title: "Algo Example",
    techStack: ["React", "TS", "Collaborative"],
    desc: "Algo Example is an educational platform dedicated to the exploration of data structures and algorithms. Offering interactive algorithm visualization, engaging user interactions, and interactive games, Algo Example represents a passionate collaborative effort. Personally spearheading the app's creation, execution, and deployment, I've taken a hands-on role in every facet of its development.",
    buttons: {
      live: "https://algoexample.com/",
      frontend: "https://github.com/JoshBergman/Algorithms-Explained",
      backend: "",
    },
    imgSrc: AlgoExample,
  },
  // {
  //   title: "Mikes Frame Service",
  //   techStack: ["React", "Built For Client"],
  //   desc: "Landing page for a local vehicle frame shop. Increased the conversion rate for new potential customers significantly. While the quality isn't to my current standards, and there are many aspects of this app I would do differently now, the client was still very satisfied with the end product. (Not a benchmark for my current skills)",
  //   buttons: {
  //     live: "https://mikesframe-25201.web.app/home",
  //     frontend: "https://github.com/JoshBergman/MikesFrameServiceV2",
  //     backend: "",
  //   },
  //   imgSrc: MikesFrameService,
  // },
];

export default projectsInfo;

// Displayed first to last by index.
// If a button property is left blank it will not be rendered. ex: live: ""

// import images from ../ProjectsPhotos/yourphotoshere
