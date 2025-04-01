import { Icon } from "@iconify-icon/react";

// technology images
import Bootstrap from "../../assets/media/images/bootstrap.png";
import HTML from "../../assets/media/images/html.png";
import CSS from "../../assets/media/images/css.png";
import Tailwind from "../../assets/media/images/tailwind.png";
import Vue from "../../assets/media/images/vue.png";
import ReactImage from "../../assets/media/images/react.png";
import PHP from "../../assets/media/images/php.png";
import Typescript from "../../assets/media/images/typescript.png";
import Git from "../../assets/media/images/git.png";

import Github from "../../assets/media/images/github.png";
import JS from "../../assets/media/images/js.png";
import mySQL from "../../assets/media/images/mySQL.png";
import xampp from "../../assets/media/images/xampp.png";
import vscode from "../../assets/media/images/vscode.png";
import PHP_i from "../../assets/media/images/php_i.png";
import Vite from "../../assets/media/images/devicon--vitejs.png";
import jQuery from "../../assets/media/images/devicon--jquery.png";
import Sass from "../../assets/media/images/logos--sass.png";
import ProfileImage from "../../assets/media/images/Adeniyi_Richard_Profile_Image.jpg";
import NGN from "../../assets/media/images/canada.png";

const cv = "https://drive.google.com/file/d/1ADPYetNeQ5vvdH22NLQ-EQML-ETChdWZ/view?usp=sharing";

// project images
import pawsomeAdopt from "../../assets/media/images/pawsome-adopt.png";
import pggtarians from "../../assets/media/images/pggtarians.png";
import projectLoqo from "../../assets/media/images/project-loqo.png";
import edupath from "../../assets/media/images/edupath.png";
import lightPolysense from "../../assets/media/images/Light-polysense.png";

// project videos

export const IconItem = ({ icon, className }) => {
	return <Icon icon={icon} className={`${className} flex items-center text-[#222222] dark:text-white`} />;
};

export const LongArrow = ({ className }) => {
	return (
		<svg viewBox="0 0 40 40" className={className}>
			<path d="m31.9 13.4-1.41 1.41 4.21 4.21h-33.1v2h33.1l-4.21 4.21 1.41 1.41 5.21-5.21 1.42-1.41-1.42-1.41z"></path>
		</svg>
	);
};

export const socialMedia = [
	{
		link: "https://github.com/TheNiyiRichard",
		linkname: "Github",
		icon: "cib:github",
		otherName: "Github",
	},
	{
		link: "https://www.linkedin.com/in/adeniyi-adedokun-a8a848213/",
		linkname: "LinkedIn",
		icon: "uil:linkedin",
		otherName: "LinkedIn",
	},
	{
    link: "https://x.com/favouritecapguy",
		linkname: "Twitter/X",
		icon: "fa6-brands:x-twitter",
		otherName: "Twitter/X",
  },
];

export const Links = [
	{
		link: "/portfolio",
		linkname: "Portfolio",
		icon: "solar:user-bold",
		otherName: "Portfolio",
  },
  {
    link: "#testimonials",
    linkname: "Testimonials",
    icon: "ph:chat-circle-dots",
    otherName: "Testimonials",
  },
  {
		link: cv,
		linkname: "Resume",
		icon: "ph:read-cv-logo-bold",
		otherName: "Resume",
  },
];

export const profileImage = ProfileImage;
export const NigerianFlag = NGN;
export const MyCV = cv;

export const MyStacks = [
	{
		name: "HTML",
		image: HTML,
	},
	{
		name: "CSS",
		image: CSS,
	},
	{
		name: "Bootstrap",
		image: Bootstrap,
	},
	{
		name: "TailwindCSS",
		image: Tailwind,
	},
	{
		name: "Sass",
		image: Sass,
	},
	{
		name: "Javascript",
		image: JS,
	},
	{
		name: "jQuery",
		image: jQuery,
	},
	{
		name: "React",
		image: ReactImage,
	},
	{
		name: "Vue.js",
		image: Vue,
	},
	{
		name: "Typescript",
		image: Typescript,
	},
	{
		name: "PHP",
		image: PHP,
	},
	{
		name: "MySQL",
		image: mySQL,
	},
	{
		name: "Github",
		image: Github,
	},
	{
		name: "Git",
		image: Git,
	},
	{
		name: "Vite",
		image: Vite,
	},
	{
		name: "Xampp",
		image: xampp,
	},
	{
		name: "Visual Studio Code",
		image: vscode,
	},
];

export const WorkExperiences = [
	{
    "position": "Software Developer (Co-op)",
    "company": "PolySense Solutions Inc.",
    "location": "Winnipeg, Manitoba, Canada (Remote)",
    "duration": "June 2024 - Present",
    "yearDuration": "2024 - Present",
    "description": "PolySense Solutions Inc. focuses on developing innovative sensor-based technologies.",
    "achievements": [
      " Successfully led a project to redesign the company's website from scratch",
      "focused on enhancing user experience and ensuring compliance with WCAG 2.1 accessibility standards",
      " My hands-on experience with front end technologies, including HTML5, CSS3, JavaScript, and React, allows me to develop interfaces that are both visually appealing and functionally robust."
    ]
  },
  {
    "position": "Analyst",
    "company": "Self-employed",
    "location": "Remote",
    "duration": "May 2021 - Present",
    "yearDuration": "2021 - Present",
    "description": "Engaged in Foreign Exchange (FX) Trading, Finance, and related analytical tasks.",
  },
  {
    "position": "Project Leader",
    "company": "Manitoba Institute of Trades and Technology",
    "location": "Winnipeg, MB",
    "duration": "May 2024",
    "yearDuration": "2024",
    "description": "Led the development of a fictional pet adoption website.",
    "achievements": [
      "Successfully led the development of a fictional pet adoption website.",
      "Designed the front end and worked on back-end integration using APIs alongside SQL Server management.",
    ]
  }
];

export const PersonalProjects = [
	{
    projectTitle: "Pawsome-adopt",
    projectLink: "https://pawsome-adopt.netlify.app/",
    imageSrc: pawsomeAdopt,
    description: 
      "A fictional pet adoption website designed to help users find and adopt pets easily. Developed with a focus on front-end design and backend integration, utilizing APIs and SQL Server for data management.",
    stacks: ["React", "Tailwind CSS", "API", "SQL Server"],
  },
	{
		projectTitle: "PGGTARIANS",
		projectLink: "https://pggtarians.live/",
		imageSrc: pggtarians,
		description:
			"A learning dashboard platform for my fellow coursemates in college and other students purposefully to send automated birthday reminders and messages, practice exam questions and questionnaires as well as have acces to shared materials. It streamlines communication and eliminate repetitive requests for files by allowing students to download course materials and results at any time. Additionally, the dashboard data could be exported for easy form completion and record-keeping.",
		stacks: ["Javascript", "PHP", "Bootstrap", "HTML", "CSS"],
	},
  {
    projectTitle: "Project-LOQO",
    projectLink: "https://theniyirichard.github.io/Project-LOQO/",
    imageSrc: projectLoqo,
    description:
      "A sleek and dynamic car website built with HTML, CSS, and JavaScript. Explore a variety of cars, view specifications, and enjoy interactive features like slideshows and filtering options. Responsive design ensures a seamless experience across devices.",
    stacks: ["HTML", "CSS", "JavaScript"],
  },
  {
    projectTitle: "Edupath",
    projectLink: "https://theniyirichard.github.io/Edupath/",
    imageSrc: edupath,
    description:
      "An educational website for selling educative materials. It features a well-designed landing page to attract users. Built using HTML, CSS, JavaScript, and Git.",
    stacks: ["HTML", "CSS", "JavaScript", "Git"],
  },
  {
    projectTitle: "Light Polysense",
    projectLink: "https://light-polysense-zip-main.vercel.app/",
    imageSrc: lightPolysense,
    description:
      "An advanced project leveraging modern web technologies to deliver a seamless user experience. Designed for efficiency, scalability, and real-time data interaction.",
    stacks: ["React", "Next.js", "Tailwind CSS", "API"],
  }
];

export const Testimonials = [
  {
    name: "John Doe",
    title: "CTO",
    company: "TechCorp",
    testimonial:
      "Working with Richard was a fantastic experience. Their attention to detail and problem-solving skills were top-notch.",
    image: ProfileImage,
  },
  {
    name: "Jane Smith",
    title: "Project Manager",
    company: "InnovateX",
    testimonial:
      "Richard delivered high-quality code and was an excellent team player. Highly recommend!",
    image: ProfileImage,
  },
  {
    name: "Alex Johnson",
    title: "CEO",
    company: "StartupHub",
    testimonial:
      "They went above and beyond to ensure the project was a success. Would love to collaborate again.",
    image: ProfileImage,
  },
];

export const Certificates = [
  {
    title: "Fullstack Web Development",
    issuer: "Coursera",
    date: "March 2025",
    imageSrc: edupath,
    link: "https://drive.google.com/fullstack-cert",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "February 2025",
    imageSrc: pggtarians,
    link: "https://drive.google.com/js-cert",
  },
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "January 2025",
    imageSrc: projectLoqo,
    link: "https://drive.google.com/aws-cert",
  },
];

