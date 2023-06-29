import AlgoExample from "./ProjectsPhotos/AlgoExample.png";
import MikesFrameService from "./ProjectsPhotos/MikesFrameService.png";
import QuickBudgetTool from "./ProjectsPhotos/QuickBudgetTool.png";

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
    title: "Quick Budget Tool",
    techStack: ["MERN", "Ecmascript", "Jest", "Supertest", "MSW"],
    desc: "QuickBudgetTool is great for quickly making a budget. Its not intended to be an investment tracker or dedicated financial app. The tool strives when used for breaking down how your cash flows on a month-to-month basis.",
    buttons: {
      live: "https://quickbudgettool.com/",
      frontend: "https://github.com/JoshBergman/QBT2",
      backend: "https://github.com/JoshBergman/qbt2-backend",
    },
    imgSrc: QuickBudgetTool,
  },
  {
    title: "Algo Example",
    techStack: ["React", "TS", "Collaborative"],
    desc: "Algo Example is an educational resource for learning about data structures and algorithms. Algo Example has algorithm visualization, interaction, and even games. Algo Example is a passion project made in collaboration with a long time peer. I personally overheaded the creation, execution, and deployment of this app.",
    buttons: {
      live: "https://algoexample.com/",
      frontend: "https://github.com/JoshBergman/Algorithms-Explained",
      backend: "",
    },
    imgSrc: AlgoExample,
  },
  {
    title: "Mikes Frame Service",
    techStack: ["React", "Built For Client"],
    desc: "Landing page for a local vehicle frame shop. Increased the conversion rate for new potential customers significantly. While the quality isn't to my current standards, and there are many aspects of this app I would do differently now, the client was still very satisfied with the end product. (Not a benchmark for my current skills)",
    buttons: {
      live: "https://mikesframe-25201.web.app/home",
      frontend: "https://github.com/JoshBergman/MikesFrameServiceV2",
      backend: "",
    },
    imgSrc: MikesFrameService,
  },
];

export default projectsInfo;

// Displayed first to last by index.
// If a button property is left blank it will not be rendered. ex: live: ""

// import images from ../ProjectsPhotos/yourphotoshere
