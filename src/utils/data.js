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
  { title: "Javascript", logo: "/skills/javascript.svg" },
  // { title: "nodeJS", logo: "/skills/nodejs.svg", },
  { title: "html", logo: "/skills/html.svg" },
  { title: "css", logo: "/skills/css.svg" },
  { title: "react", logo: "/skills/react.svg" },
  { title: "nextJS", logo: "/skills/nextjs.svg" },
  { title: "sass", logo: "/skills/sass.svg" },
  { title: "tailwind", logo: "/skills/tailwind.svg" },
  { title: "firebase", logo: "/skills/firebase.svg" },
  { title: "git", logo: "/skills/git.svg" },
  // { title: "github", logo: "/skills/github.svg", },
  { title: "figma", logo: "/skills/figma.svg" },
  { title: "blender", logo: "/skills/blender.svg" },
  { title: "illustrator", logo: "/skills/illustrator.svg" },
  { title: "photoshop", logo: "/skills/photoshop.svg" },
  // { title: "windows", logo: "/skills/windows.svg", },
  { title: "linux", logo: "/skills/linux.svg" },
  {
    title: "responsive design",
    logo: "/skills/responsiveWeb.svg",
  },
];

export const projects = [
  {
    title: "texty",
    description: "",
    tech: ["react", "react router", "Sass", "Firebase", "vercel"],
    challenges: "",
    overcome: "",
    image: "/texty.webp",
    live: "https://texty.ismayelalam.com/",
    code: "https://github.com/IsmayelAlam/demo_project-texty",
  },
  {
    title: "bookish",
    description:
      "Imagine having all your favorite books in one cozy spot. With this app, you can do it all - read your treasured tales online or snag a paperback copy from Amazon. Plus, you can bookmark your reading adventures for later.And guess what? You can explore your favorite authors too! This website is super clever with its dynamic links. If you share a link with your buddies, it'll always lead them to the exact same page. Pretty neat, right? Hope you adore it as much as I do. Happy reading! 📚",
    tech: ["react", "react query", "react router", "tailwindcss", "vercel"],
    challenges:
      "One of the most interesting challenges I tackled with this app was managing all that data. The free API have got a massive collection, with over 30 million books and documents, with varies amount of details available for each to query. Some may not have those snazzy cover images, and others might not be available for online reading.",
    overcome:
      "Getting all the data to play nicely together was no small feat! Let me tell you, it took a whole bunch of tireless hours. After a ton of trial and error, I managed to build a system that not only showcases the common data but also handles errors like a pro. We've got plenty of safety nets in place and some clever constraints to ensure your user experience is as smooth as a warm cup of cocoa on a chilly day. ",
    image: "/bookish.webp",
    live: "https://bookish.ismayelalam.com/",
    code: "https://github.com/IsmayelAlam/demo_project-bookish",
  },
  {
    title: "work board",
    description: "",
    tech: ["react", "redux", "tailwindcss", "vercel"],
    challenges: "",
    overcome: "",
    image: "/workboard.webp",
    live: "https://workBoard.ismayelalam.com/",
    code: "https://github.com/IsmayelAlam/demo_project-workBoard",
  },
];
