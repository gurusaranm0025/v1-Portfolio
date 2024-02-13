import keepCloneImg from "@/public/keep-clone.png";
import bloomBlogImg from "@/public/bloom-blog.png";
import sdMLImg from "@/public/sd-ml.png";
import v1PortImg from "@/public/v1p.png";

export const projectsArr = [
  {
    imgSrc: "https://portfolio-v1-635ea.web.app/keep-clone.png",
    secondSrc: keepCloneImg,
    title: "Keep Clone",
    des: "A simple note taking or notes app, I just ended up naming it Keep clone!!",
    gitLink: "https://github.com/gurusaranm0025/keep-clone-nextjs",
    projLink: "https://keep-clone-next.onrender.com/",
    skills: ["React.JS", "TailwindCSS", "PostgresSQL", "Prisma"],
  },
  {
    imgSrc: "https://portfolio-v1-635ea.web.app/bloom-blog.png",
    secondSrc: bloomBlogImg,
    title: "Bloom - Blogging Platform",
    des: "A blogging which I started working on to learn TailwindCSS and ended up finishing it as full-fledged web app ",
    gitLink: "https://github.com/gurusaranm0025/bloom-blogging",
    projLink: "https://bloom-blogging.onrender.com/",
    skills: ["Next.JS", "TailwindCSS", "MongoDB", "React.JS"],
  },
  {
    imgSrc: "https://portfolio-v1-635ea.web.app/sd-ml.png",
    secondSrc: sdMLImg,
    title: "Symptom Diagnoser",
    des: "It uses a simple ML(Machine Learning) model which gets disease symptoms as inputs and predicts the disease. ML model is trained to predict 43 diseases and trained using dataset with 4000+ observations. ",
    gitLink: "https://github.com/gurusaranm0025/symptom-diagnoser",
    projLink: undefined,
    skills: ["EJS", "CSS", "Python", "Express.js", "Flask"],
  },
  {
    imgSrc: "https://portfolio-v1-635ea.web.app/v1p.png",
    secondSrc: v1PortImg,
    title: "My Portfolio Site",
    des: "It's mt first portfolio website, where you can find about my projects and skills.",
    gitLink: "https://github.com/gurusaranm0025/v1-Portfolio",
    projLink: "https://portfolio-v1-635ea.web.app/",
    skills: ["Next.JS", "TailwindCSS", "React.JS"]
  }
];

export const languagesAndSkills = [
  "Python",
  "JavaScript(ECMAScript)",
  "HTML",
  "CSS",
  "ReactJS",
  "NEXT.js",
  "TailwindCSS",
  "Node.js",
  "Linux",
  "Git",
  "Github",
];

export const languages = [
  "Languages",
  "JavaScript(ES6)",
  "Python",
  "HTML",
  "CSS",
  "SQL",
];

export const frameworks = [
  "Frameworks",
  "ReactJS",
  "NEXT.js",
  "TailwindCSS",
  "Bootstrap",
];

export const tools = [
  "Tools",
  "Linux",
  "Git & Github",
  "Postman",
  "MongoDB",
  "PostgresSQL",
];
