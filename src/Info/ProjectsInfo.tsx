// import MikesFrameService from "./ProjectsPhotos/MikesFrameService.png";
import AutoCL from "./ProjectsPhotos/AutoCL.png";
import AlgoExample from "./ProjectsPhotos/AlgoExample.png";
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
    title: "Auto CL",
    techStack: ["React", "TS", "Node", "Express"],
    desc: "AI-driven Cover Letter Generator with a user-centric focus. Leveraged machine learning to quickly generate personalized cover letters based on minimal user input. Facilitates a seamless transition for users from the intricacies of cover letter composition, enabling them to concentrate on articulating their qualifications as a strong match for the role.",
    buttons: {
      live: "https://autocl-abb1d.web.app",
      frontend: "https://github.com/JoshBergman/AutoCoverLetter",
      backend: "https://github.com/JoshBergman/AutoCoverLetter",
    },
    imgSrc: AutoCL,
  },
  {
    title: "Quick Budget Tool",
    techStack: ["MERN", "Jest", "ES", "MSW"],
    desc: "QuickBudgetTool excels at rapidly crafting budgets, emphasizing simplicity and speed. While it doesn't serve as an investment tracker or specialized financial application, its strength lies in dissecting your month-to-month cash flow.",
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
