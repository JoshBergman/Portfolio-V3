import { IconType } from "react-icons";
import { FaReact, FaNodeJs, FaSuperpowers } from "react-icons/fa";
import {
  TbBrandPython,
  TbBrandCpp,
  TbBrandMongodb,
  TbBrandTypescript,
  TbBrandGraphql,
} from "react-icons/tb";
import { SiJest, SiExpress, SiRedux, SiWebpack } from "react-icons/si";
import { VscTerminalCmd } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoIosHammer } from "react-icons/io";
import { BsGit } from "react-icons/bs";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const skillsInfo: { title: string; skills: [IconType, string][] }[] = [
  {
    title: "My Stack",
    skills: [
      [TbBrandTypescript, "Typescript"],
      [FaReact, "React"],
      [FaNodeJs, "Node"],
      [SiExpress, "Express"],
      [TbBrandMongodb, "MongoDB"],
      [SiJest, "Jest"],
    ],
  },
  {
    title: "What I'm Good At",
    skills: [
      [TbBrandPython, "Python"],
      [BsGit, "Git"],
      [SiRedux, "Redux"],
      [SiWebpack, "Webpack"],
      [TbBrandMongodb, "Mongosh"],
      [IoIosHammer, "NOSQL"],
    ],
  },
  {
    title: "What I've Used Before",
    skills: [
      [VscTerminalCmd, "Batch Scripting"],
      [BiLogoPostgresql, "SQL"],
      [TbBrandGraphql, "GraphQL"],
      [MdOutlineMiscellaneousServices, "MSW"],
      [FaSuperpowers, "Supertest"],
      [TbBrandCpp, "C++"],
    ],
  },
];

export default skillsInfo;
