import Link from "next/link";

function Footer() {
  const links = {
    linkedin: [
      "https://www.linkedin.com/in/guru-saran-m-2b6357251",
      "fi fi-brands-linkedin",
    ],
    github: ["https://github.com/gurusaranm0025", "fi fi-brands-github"],
    mail: ["mailto:gurusaranm0025@gmail.com", "fi fi-sr-envelope"],
  };

  return (
    <div className="w-full grid grid-cols-2">
      <p className="top-0 left-1 text-2xl max-md:text-lg leading-10 ml-3 md:ml-10 text-raisin-black tracking-tighter anonymous-pro-reg inline-block min-w-[25ch]">
        Designed and Developed by <br /> Guru Saran M, 2024
      </p>

      <div className="h-full w-full flex justify-end items-center gap-12 max-md:gap-4 pr-8">
        {Object.keys(links).map((key, i) => {
          return (
            <div key={i}>
              <Link
                href={links[key][0]}
                target="_blank"
                className="text-xl max-md:text-lg text-raisin-black rubik-reg tracking-normal leading-8 md:hover:text-majorelle-blue md:hover:underline duration-300 max-md:text-majorelle-blue"
              >
                <span className="max-md:hidden">{key}</span>
                <i
                  className={`${links[key][1]} text-2xl max-md:text-xl duration-500 md:hidden`}
                ></i>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
