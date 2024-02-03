import { languages, frameworks, tools } from "@/common/filesData";

function Skills() {
  return (
    <div className="group flex gap-40 max-md:gap-10 max-md:flex-col justify-center mb-10 mt-20">
      <div className="h-full">
        {languages.map((language, i) => {
          return (
            <ul className="list-disc text-raisin-black p-0">
              {i == 0 ? (
                <>
                  <p className="group-hover:text-majorelle-blue capitalize -ml-3 text-4xl text-raisin-black anonymous-pro-bold tracking-tight mb-6 duration-500">
                    {language}
                  </p>
                </>
              ) : (
                <>
                  <li className="text-xl mb-3 text-left">{language}</li>
                </>
              )}
            </ul>
          );
        })}
      </div>
      <div className="h-full">
        {frameworks.map((framework, i) => {
          return (
            <ul className="list-disc text-raisin-black flex flex-col gap-9 p-0">
              {i == 0 ? (
                <>
                  <p className="capitalize -ml-3 text-4xl text-raisin-black anonymous-pro-bold tracking-tight mb-6 group-hover:text-majorelle-blue duration-500">
                    {framework}
                  </p>
                </>
              ) : (
                <>
                  <li className="text-xl mb-3">{framework}</li>
                </>
              )}
            </ul>
          );
        })}
      </div>
      <div className="h-full">
        {tools.map((tool, i) => {
          return (
            <ul className="list-disc text-raisin-black flex flex-col gap-9 p-0">
              {i == 0 ? (
                <>
                  <p className="group-hover:text-majorelle-blue capitalize -ml-3 text-4xl text-raisin-black anonymous-pro-bold tracking-tight mb-6 duration-500">
                    {tool}
                  </p>
                </>
              ) : (
                <>
                  <li className="text-xl mb-3">{tool}</li>
                </>
              )}
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
