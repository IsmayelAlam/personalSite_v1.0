import React from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsCodeSlash, BsInfoCircle } from "react-icons/bs";
import { LuContact } from "react-icons/lu";

export const navigation = [
  {
    title: "home",
    link: "#",
    icon: React.createElement(BiHomeAlt2),
  },
  // { title: "skills", link: "#skills" },
  {
    title: "projects",
    link: "#projects",
    icon: React.createElement(BsCodeSlash),
  },
  { title: "about", link: "#about", icon: React.createElement(BsInfoCircle) },
  {
    title: "contact",
    link: "#contact",
    icon: React.createElement(LuContact),
  },
];

export const skills = [
  { title: "Javascript", logo: "/skills/javascript.svg", description: "" },
  // { title: "nodeJS", logo: "/skills/nodejs.svg", description: "" },
  { title: "html", logo: "/skills/html.svg", description: "" },
  { title: "css", logo: "/skills/css.svg", description: "" },
  { title: "react", logo: "/skills/react.svg", description: "" },
  { title: "nextJS", logo: "/skills/nextjs.svg", description: "" },
  { title: "sass", logo: "/skills/sass.svg", description: "" },
  { title: "tailwind", logo: "/skills/tailwind.svg", description: "" },
  { title: "firebase", logo: "/skills/firebase.svg", description: "" },
  { title: "git", logo: "/skills/git.svg", description: "" },
  // { title: "github", logo: "/skills/github.svg", description: "" },
  { title: "figma", logo: "/skills/figma.svg", description: "" },
  { title: "blender", logo: "/skills/blender.svg", description: "" },
  { title: "illustrator", logo: "/skills/illustrator.svg", description: "" },
  { title: "photoshop", logo: "/skills/photoshop.svg", description: "" },
  // { title: "windows", logo: "/skills/windows.svg", description: "" },
  { title: "linux", logo: "/skills/linux.svg", description: "" },
  {
    title: "responsive design",
    logo: "/skills/responsiveWeb.svg",
    description: "",
  },
];
