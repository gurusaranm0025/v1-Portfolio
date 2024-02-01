import keepCloneImg from "@/public/keep-clone.png";

const projectsArr = [
  {
    imgSrc: keepCloneImg,
    title: "Keep Clone",
    des: "A simple note taking or notes app, I just ended up naming it Keep clone!!",
    projLink: "https://keep-clone-next.onrender.com/",
    skills: ["React.JS", "TailwindCSS", "PostgresSQL", "Prisma"],
  },
  {
    title: "Bloom - Blogging Platform",
    des: "A blogging which I started working on to learn TailwindCSS and ended up finishing it as full-fledged web app ",
    projLink: "https://bloom-blogging.onrender.com/",
    skills: ["Next.JS", "TailwindCSS", "MongoDB", "React.JS"],
  },
  {
    title: "Symptom Diagnoser",
    des: "It uses a simple ML(Machine Learning) model which gets disease symptoms as inputs and predicts the disease. ML model is trained to predict 43 diseases and trained using dataset with 4000+ observations. ",
    projLink: "",
    skills: ["NodeJS", "EJS", "CSS", "Python", "Express.js", "Flask"],
  },
];

export default projectsArr;
