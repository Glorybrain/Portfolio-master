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

// import cv from "../../assets/media/documents/OKELEYE_VICTOR_CV.pdf";
const cv = "https://drive.google.com/file/d/1ADPYetNeQ5vvdH22NLQ-EQML-ETChdWZ/view?usp=sharing";

// project images
import resumeMe from "../../assets/media/images/resume-me.png";
import getLinkedAI from "../../assets/media/images/getLinkedAI.png";
import pggtarians from "../../assets/media/images/pggtarians.png";

// project videos
import resumeMeV from "../../assets/media/videos/Résumé-me.mp4";

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
		link: "https://x.com/o_vickkk",
		linkname: "Twitter/X",
		icon: "fa6-brands:x-twitter",
		otherName: "Twitter/X",
	},
	// {
	// 	link: "https://instagram.com/o_vickkk",
	// 	linkname: "Instagram",
	// 	icon: "lucide:instagram",
	// 	otherName: "Instagram",
	// },
];

export const Links = [
	{
		link: "/portfolio",
		linkname: "Portfolio",
		icon: "solar:user-bold",
		otherName: "Portfolio",
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
		position: "Frontend Developer",
		company: "MyZoda",
		location: "Remote",
		duration: "Aug 2024 - present",
		yearDuration: "Aug 2024 - present",
		description:
			"MyZODA Limited is a Nigerian tech company offering innovative digital solutions in Health Tech, Agri-Tech, Fin-Tech, Automotive, and more. They focus on user-centric design and scalable applications tailored to the Nigerian market. Notable projects include the Zero6 Alliance Car Rental website. The team, based in Makurdi, Benue, Nigeria, comprises skilled designers, engineers, and strategists.",
		achievements: [
			"Independently developed the complete frontend of the website, creating a user-focused interface with optimized performance and responsiveness.",
			"Implemented comprehensive monitoring tools for frontend performance, enhancing visibility and quick issue resolution.",
			"Optimized frontend data handling processes, resulting in a 50% improvement in load times and overall user experience.",
		],
	},
	{
		position: "Software Developer",
		company: "Cardify Africa",
		location: "Ibadan, Oyo State (Remote)",
		duration: "Feb 2022 - present",
		yearDuration: "SEPT. 2022 - present",
		description: "Cardify Africa is a financial technology platform catering to users in Africa and the diaspora.",
		achievements: [
			"Spearheaded the development of the company's web platform from inception using CDN Vue, Bootstrap, and PHP.",
			"Developed the complete user frontend interface and integrated RESTful APIs for enhanced functionality.",
			"Collaborated closely with the CTO to uphold high coding standards and ensure timely project milestones.",
			"Developed comprehensive monitoring and alerting systems for critical resources.",
			"Enhanced data migration processes, resulting in over a 30% improvement in query performance.",
		],
	},
	{
		position: "Frontend Developer (Contract, Remote)",
		company: "Light.ng",
		location: "Ibadan, Oyo State",
		duration: "Apr - July 2023",
		yearDuration: "Apr. 2023 - 2024",
		description: "Light.ng enables users to purchase prepaid and postpaid electricity units across Nigeria.",
		achievements: [
			"Constructed the company's web platform from scratch using CDN Vue and Bootstrap.",
			"Implemented RESTful APIs to enhance integration capabilities.",
			"Worked collaboratively with the CTO to ensure an optimal user experience.",
		],
	},
	{
		position: "Lead Developer (Contract)",
		company: "Fair Deal",
		location: "Lagos State",
		duration: "Sept - Dec 2023 ",
		yearDuration: "Sept. - Dec. 2023",
		description:
			"Fair Deal is a frontend-heavy web application designed to display user products for sale with direct call-to-action features on WhatsApp.",
	},
	{
		position: "Frontend Engineer (Contract, Remote)",
		company: "Talemia",
		duration: "2021 - 2022",
		yearDuration: "2021 - 2022",
		description: "Talemia provides tailored solutions for startups aiming for growth.",
		achievements: ["Developed the complete user frontend interface and integrated RESTful APIs for enhanced functionality."],
	},
	{
		position: "Frontend Developer (Contract)",
		company: "Dilaac Digital Transfer",
		duration: "Jan - July 2023",
		yearDuration: "Jan - July 2023",
		description: "Dilaac is a fintech company specializing in international transfer solutions.",
		achievements: ["Developed the frontend for both admin and user dashboards utilizing Vue.js."],
	},
	{
		position: "Software Developer (Contract)",
		company: "Raoatech IT - Electromech Limited",
		location: "Yaba, Lagos, Lagos State",
		duration: "June - July 2022",
		yearDuration: "2022 - 2023",
		description: "Raoatech provides an all-inclusive marketplace for digital content and learning.",
		achievements: [
			"Developed a bulk SMS platform and integrated third-party APIs into both admin and user dashboards.",
			"Created a payment management system while optimizing MySQL queries with PHP.",
		],
	},
	{
		position: "Software Developer, Full-stack",
		company: "eNetworksVerse",
		location: "Apo, FCT, Abuja",
		duration: "Apr 2024 - present",
		yearDuration: "2024 - present",
		description: "Responsible for creating both internal and external projects using vanilla PHP and Bootstrap for frontend development.",
		achievements: ["Developed the complete user frontend interface and enhanced functionality."],
	},
	{
		position: "Coding Tutor",
		company: "Power X Academy",
		duration: "Aug 2022 - Dec 2023",
		yearDuration: "2022 - 2023",
		description: "PowerX Academy offers global coding training for students.",
		achievements: ["Educated students from various countries, including the USA, Nigeria, and Ghana in coding fundamentals."],
	},
];

export const PersonalProjects = [
	{
		projectTitle: "Résumé.me",
		projectLink: "https://v-resume-me.netlify.app",
    imageSrc: resumeMe,
		videoSrc: resumeMeV,
		description:
			"Resumé.me is digital portfolio or résumé builder platform designed help users create a quick resume right off the bat. It provides sections for work experience, skills, projects, and possibly contact information, providing a comprehensive overview of the individual’s qualifications in a visually organized format as well as tips and tricks for the for the resume you are trying to build.",
		stacks: ["React", "Javascript", "TailwindCSS", "WYSIWYG"],
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
		projectTitle: "getLinked AI Coding Challenge",
		projectLink: "https://getlinked-ai-coding-challenge.netlify.app/",
		imageSrc: getLinkedAI,
		description: "Participated in an online coding challenge aimed at allowing competitors express their creativity to the best level",
		stacks: ["React", "Framer Motion", "Headless UI", "Axios", "TailwindCSS"],
	},
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
    title: "React Developer Certification",
    issuer: "Meta (Coursera)",
    date: "March 2025",
    link: "https://coursera.org/verify/react-cert",
    image: "/images/react-cert.png",
  },
  {
    title: "React Developer Certification",
    issuer: "Meta (Coursera)",
    date: "March 2025",
    link: "https://coursera.org/verify/react-cert",
    image: "/images/react-cert.png",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "February 2025",
    link: "https://freecodecamp.org/certification/js-algo",
    image: "/images/js-cert.png",
  },
  {
    title: "Frontend Developer Nanodegree",
    issuer: "Udacity",
    date: "January 2025",
  },
];
