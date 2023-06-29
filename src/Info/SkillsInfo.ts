import { IconType } from "react-icons";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  TbBrandPython,
  TbBrandCpp,
  TbBrandMongodb,
  TbBrandTypescript,
} from "react-icons/tb";
import { SiJest, SiExpress } from "react-icons/si";
import { VscTerminalCmd } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoIosHammer } from "react-icons/io";

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
      [IoIosHammer, "NOSQL"],
    ],
  },
  {
    title: "What I've Used Before",
    skills: [
      [VscTerminalCmd, "Batch Scripting"],
      [BiLogoPostgresql, "SQL"],
      [TbBrandCpp, "C++"],
    ],
  },
];

export default skillsInfo;
