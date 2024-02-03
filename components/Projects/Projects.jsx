import { projectsArr } from "@/common/filesData";
import Image from "next/image";

function Projects() {
  return (
    <div className="mt-24 h-full flex-col">
      {projectsArr.map((project, i) => {
        return (
          <>
            <div
              key={i}
              className="group max-h-[550px] p-16 h-full flex gap-7 hover:backdrop-brightness-125 rounded-2xl outline-none outline-snow/50 hover:outline-majorelle-blue duration-500 mt-5"
            >
              <Image
                src={project.imgSrc}
                className="rounded-xl bg-viridian/10 shadow-xl shadow-raisin-black/30 group-hover:shadow-raisin-black/80 duration-500 outline-none outline-snow group-hover:outline-majorelle-blue"
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
                          key={i}
                          className="border-none outline-none outline-majorelle-blue/50 hover:outline-coral-pink bg-majorelle-blue/30 hover:bg-coral-pink/50 duration-500 px-5 py-2 flex-none rounded-full text-raisin-black text-sm"
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

      <div className="my-10 w-full flex justify-center">
        <span className="px-5 py-3 my-2 text-2xl anonymous-pro-reg tracking-tight bg-snow/30 outline-none outline-snow/30 rounded-full hover:outline-majorelle-blue/90 hover:bg-majorelle-blue/30 duration-500 hover:backdrop-brightness-125 hover:shadow-xl shadow-viridian cursor-pointer">
          View My Resume
        </span>
      </div>
    </div>
  );
}

export default Projects;
