import { languages, frameworks, tools } from "@/common/filesData";
import { Fragment } from "react";

function Skills() {
  return (
    <div className="group max-md:grid sm:grid-cols-2 sm:grid-rows-2 md:flex gap-5 sm:gap-8 md:gap-10 lg:gap-40 sm:justify-center md:justify-around lg:justify-center mb-10 mt-5 lg:mt-20">
      <div className="h-full w-full flex md:justify-center sm:justify-start max-md:pl-7 max-md:mt-5">
        <ul className="list-disc text-raisin-black p-0 inline-block">
          {languages.map((language, i) => {
            return (
              <Fragment key={i}>
                {i == 0 ? (
                  <p
                    key={i}
                    className="-ml-3 text-4xl max-md:text-3xl text-raisin-black anonymous-pro-bold max-md:tracking-tighter tracking-tight mb-6 group-hover:text-majorelle-blue/60 duration-300 max-md:text-majorelle-blue/60"
                  >
                    {language}
                  </p>
                ) : (
                  <li key={language} className="text-xl max-md:text-lg mb-3">
                    {language}
                  </li>
                )}
              </Fragment>
            );
          })}
        </ul>
      </div>
      <div className="h-full w-full flex justify-start md:justify-center max-md:pl-7">
        <ul className="list-disc text-raisin-black p-0 inline-block">
          {frameworks.map((framework, i) => {
            return (
              <Fragment key={i}>
                {i == 0 ? (
                  <p
                    key={framework}
                    className="capitalize -ml-3 text-4xl max-md:text-3xl text-raisin-black anonymous-pro-bold tracking-tight mb-6 group-hover:text-majorelle-blue/60 duration-300 max-md:tracking-tighter max-md:text-majorelle-blue/60"
                  >
                    {framework}
                  </p>
                ) : (
                  <li key={framework} className="text-xl max-md:text-lg mb-3">
                    {framework}
                  </li>
                )}
              </Fragment>
            );
          })}
        </ul>
      </div>
      <div className="h-full w-full flex justify-start md:justify-center max-md:pl-7">
        <ul className="list-disc text-raisin-black p-0 inline-block">
          {tools.map((tool, i) => {
            return (
              <Fragment key={i}>
                {i == 0 ? (
                  <p
                    key={tool}
                    className="group-hover:text-majorelle-blue/60 capitalize -ml-3 text-4xl max-md:text-3xl text-raisin-black anonymous-pro-bold tracking-tight mb-6 duration-300 max-md:text-majorelle-blue/60"
                  >
                    {tool}
                  </p>
                ) : (
                  <li key={tool} className="text-xl max-md:text-lg mb-3">
                    {tool}
                  </li>
                )}
              </Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
