import React from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsCodeSlash, BsInfoCircle } from "react-icons/bs";
import { LuContact } from "react-icons/lu";

export const navigation = [
  {
    title: "home",
    link: "#home",
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
    description:
      "Texty has been an exciting journey, undoubtedly the most complex project I've ever tackled. While it's a work in progress and not without its imperfections, there's a lot to love. With Texty, you can effortlessly connect with others by searching for users, curating your friend list, and engaging in real-time, meaningful chats. Plus, we've got your back with user blocking functionality to ensure a positive experience.",
    tech: ["React", "React Router", "Sass", "Firebase", "Vercel"],
    challenges:
      "One of the most thrilling challenges I encountered during this project was the database implementation, but once I tackled that hurdle, everything started flowing smoothly. The tech stack I handpicked for this endeavor turned out to be a perfect match, working seamlessly together and contributing significantly to our speedy progress. It's been a fantastic journey, and I can't wait to keep building and improving to make Texty even better!",
    outcome:
      "After experimenting with various options, I settled on utilizing three separate datasets for this project. For the backend, I chose Firebase, and I have to say, setting it up was a breeze. It's been an incredible experience, and I'm thrilled with how well everything is coming together. We're making great strides, and I'm excited to continue improving and enhancing Texty!",
    image: "/texty.webp",
    live: "https://texty.ismayelalam.com/",
    code: "https://github.com/IsmayelAlam/demo_project-texty",
  },
  {
    title: "bookish",
    description:
      "Imagine having all your favorite books in one cozy spot. With this app, you can do it all - read your treasured tales online or snag a paperback copy from Amazon. Plus, you can bookmark your reading adventures for later.And guess what? You can explore your favorite authors too! This website is super clever with its dynamic links. If you share a link with your buddies, it'll always lead them to the exact same page. Pretty neat, right? Hope you adore it as much as I do. Happy reading! ",
    tech: ["React", "React Query", "React Router", "TailwindCSS", "Vercel"],
    challenges:
      "One of the most interesting challenges I tackled with this app was managing all that data. The free API have got a massive collection, with over 30 million books and documents, with varies amount of details available for each to query. Some may not have those snazzy cover images, and others might not be available for online reading.",
    outcome:
      "Getting all the data to play nicely together was no small feat! Let me tell you, it took a whole bunch of tireless hours. After a ton of trial and error, I managed to build a system that not only showcases the common data but also handles errors like a pro. We've got plenty of safety nets in place and some clever constraints to ensure your user experience is as smooth as a warm cup of cocoa on a chilly day. ",
    image: "/bookish.webp",
    live: "https://bookish.ismayelalam.com/",
    code: "https://github.com/IsmayelAlam/demo_project-bookish",
  },
  {
    title: "work board",
    description:
      "In today's fast-paced world, maintaining concentration can be quite challenging. To combat this, I've devised a workboard that assists me in managing day-to-day tasks and maintaining a well-structured workflow. It bears a striking resemblance to Trello, encompassing many of its features while also incorporating some personalized enhancements. This endeavor has been an enjoyable project, one that has imparted valuable lessons along the way.",
    tech: ["React", "Redux", "TailwindCSS", "Vercel"],
    challenges:
      "Embarking on my inaugural major project, I've since reflected on my choice of tech stack. In hindsight, I might have opted for a different approach, considering that handling data and managing their interactions presented formidable challenges at the time. The sheer volume of information to process forced me to make some tough decisions, leading to the removal of certain features. It's worth noting that there's no backend involved; instead, everything is stored locally. As I've gained more experience, it's become evident that there's ample room for enhancement in this project as well.",
    outcome:
      "Undoubtedly, there's an immense amount of knowledge to gain, and as time progresses, I'm confident that tasks will become more manageable. This entire experience has been nothing short of amazing, and I've absorbed a wealth of insights from it. As I wrapped up this project, I witnessed a cascade of revelations, solidifying my belief in my capacity to tackle intricate challenges and continually grow through the process.",
    image: "/workboard.webp",
    live: "https://workBoard.ismayelalam.com/",
    code: "https://github.com/IsmayelAlam/demo_project-workBoard",
  },
];
