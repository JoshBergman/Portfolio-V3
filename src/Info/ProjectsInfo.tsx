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
    desc: `Too Simple Analytics is an analytics platform for developers. TSA provides a meaningful feature set including: advanced view tracking, powerful data filtering tools, dynamic data visualization, smart view counting scripts, and more. See it in action using the guest credentials: email: “guest@email.com” password: “guest”.`,
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
    desc: "Auto CL stands for “Auto Cover-Letter”. It is a lightweight AI web app that bridges the gap between templated cover letters and time-consuming original cover letters. The application allows you to generate a unique structure for every cover letter. While not a replacement to writing a strong cover letter, Auto CL gives you a (usually) strong foundation to work off of.",
    buttons: {
      live: "https://autocl-abb1d.web.app",
      frontend: "https://github.com/JoshBergman/AutoCoverLetter",
      backend: "https://github.com/JoshBergman/AutoCoverLetter",
    },
    imgSrc: AutoCL,
  },
  {
    title: "Algo Example",
    techStack: ["React", "TS", "Collaborative"],
    desc: "Algo Example is an educational platform dedicated to the exploration of data structures and algorithms. Offering interactive algorithm visualization, engaging user interactions, and interactive games, Algo Example represents a passionate collaborative effort.",
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
