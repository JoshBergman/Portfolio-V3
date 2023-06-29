import monke from "./ProjectsPhotos/monke.png";

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
}

const projectsInfo: IProjectsInfo[] = [
  {
    title: "Title",
    techStack: ["Typescript", "Coding"],
    desc: "Long descrtion",
    buttons: {
      live: "live link",
      frontend: "Frontend Repo",
      backend: "backend Repo",
    },
    imgSrc: monke,
  },
];

export default projectsInfo;

// Displayed first to last by index.
// If a button property is left blank it will not be rendered. ex: live: ""

// import images from ../ProjectsPhotos/yourphotoshere
