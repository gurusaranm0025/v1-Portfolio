import projectsArr from "@/common/filesData";
import Image from "next/image";
import Skills from "./Skills";
import Link from "next/link";

function Projects() {
  return (
    <div className="pt-16 h-full flex-col">
      {projectsArr.map((project, i) => {
        return (
          <>
            <div
              key={i}
              className="group max-h-[550px] p-16 h-full flex gap-7 hover:backdrop-brightness-125 rounded-2xl outline-none hover:outline-snow duration-500 mt-3"
            >
              <Image
                src={project.imgSrc}
                className="rounded-xl bg-viridian/10 shadow-xl shadow-raisin-black/30 group-hover:shadow-raisin-black/80 duration-500"
                alt="Reference image"
                width={750}
                height={550}
              />
              <div className="">
                <p className="text-5xl text-raisin-black rubik-md my-5 group-hover:text-majorelle-blue duration-500 tracking-tighter">
                  {project.title}
                </p>
                <p className="text-2xl text-raisin-black rubik-reg w-full tracking-tight">
                  {project.des}
                </p>
                <div className="flex gap-5 pt-3 flex-wrap">
                  {project.skills.map((skill, i) => {
                    return (
                      <>
                        <button
                          className="border-none outline-none outline-majorelle-blue/50 hover:outline-coral-pink bg-majorelle-blue/30 hover:bg-coral-pink/50 duration-500 px-5 py-2 flex-none rounded-full text-raisin-black text-sm"
                          key={i}
                        >
                          {skill}
                        </button>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Projects;
