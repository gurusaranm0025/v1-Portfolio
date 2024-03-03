import { projectsArr } from "@/common/filesData";
import Link from "next/link";

function Projects() {
  return (
    <div className="md:mt-24 h-full flex-col">
      {projectsArr.map((project, i) => {
        return (
          <div
            key={i}
            // href={project.gitLink}
            // target="_blank"
            className="group lg:max-h-[550px] p-8 md:p-16 h-full flex max-lg:flex-col gap-7 hover:backdrop-brightness-125 rounded-2xl outline-none outline-snow/50 hover:outline-majorelle-blue duration-500 mt-5 max-md:outline-majorelle-blue"
          >
            <div className="max-lg:w-full max-lg:flex max-lg:justify-center">
              <img
                src={`${project.imgSrc || project.secondSrc}`}
                className="rounded-xl bg-viridian/10 shadow-xl shadow-raisin-black/30 group-hover:shadow-raisin-black/80 duration-500 outline-none outline-snow group-hover:outline-majorelle-blue lg:max-h-[250px] lg:max-w-[450px] aspect-video md:max-w-[450px] max-md:outline-majorelle-blue"
                alt="Reference image"
              />
            </div>
            <div className="">
              <p className="text-4xl text-raisin-black rubik-md my-5 group-hover:text-majorelle-blue duration-500 tracking-tighter">
                {project.title}
              </p>
              <p className="text-xl xl:text-2xl text-raisin-black rubik-reg w-full tracking-tight">
                {project.des}
              </p>
              <div className="flex gap-5 pt-3 flex-wrap">
                {project.skills.map((skill, index) => {
                  return (
                    <button
                      key={index}
                      className="border-none outline-none outline-snow/50 group-hover:outline-majorelle-blue group-hover:bg-majorelle-blue/30 bg-snow/50 duration-500 px-5 py-2 flex-none rounded-full text-raisin-black text-sm pointer-events-none max-md:outline-majorelle-blue max-md:bg-majorelle-blue/30"
                    >
                      {skill}
                    </button>
                  );
                })}
              </div>
              <div className="mt-8 flex gap-5">

                {
                  project.projLink ?
                    <Link href={project.projLink} target="_blank" className="mt-10 px-5 py-2 bg-snow/50 outline-none outline-snow/50 group-hover:outline-majorelle-blue rounded-md text-lg rubik-reg tracking-wider hover:bg-majorelle-blue/30 max-md:outline-majorelle-blue max-md:bg-majorelle-blue/30 duration-500 text-raisin-black max-md:flex-1 text-center max-md:group-hover:hover:bg-majorelle-blue/20">
                      Visit Project
                    </Link> : ""
                }

                <Link href={project.gitLink} target="_blank" className="mt-10 px-5 py-2 bg-snow/50 outline-none outline-snow/50 group-hover:outline-majorelle-blue rounded-md text-lg rubik-reg tracking-wider hover:bg-majorelle-blue/30 max-md:outline-majorelle-blue max-md:bg-majorelle-blue/30 duration-500 text-raisin-black max-md:flex-1 text-center max-md:group-hover:hover:bg-majorelle-blue/20">
                  GitHub Repo
                </Link>

              </div>
            </div>
          </div>
        );
      })}

      <Link
        href={"https://drive.google.com/file/d/1t3KI22KRtHOKSOsyj6pYj6Q7Vxrj1rsX/view?usp=sharing"}
        target="_blank"
        className="my-10 w-full flex justify-center"
      >
        <button className="px-5 py-3 my-2 text-2xl max-md:text-xl nunito-reg tracking-tight bg-snow/80 outline-none outline-snow/90 rounded-xl hover:outline-majorelle-blue/90 hover:bg-majorelle-blue/30 duration-500 hover:backdrop-brightness-125 hover:shadow-2xl shadow-viridian cursor-pointer text-raisin-black max-lg:bg-majorelle-blue/30 max-lg:outline-majorelle-blue/90">
          Check Out My Resume
        </button>
      </Link>
    </div>
  );
}

export default Projects;
