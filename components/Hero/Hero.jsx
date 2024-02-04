import Link from "next/link";

function Hero() {
  return (
    <div className="h-cover ml-7 md:ml-10 lg:ml-20 flex items-center relative">
      <div className="max-h-[600px] h-full">
        <p className="text-5xl max-md:text-3xl my-3 anonymous-pro-bold tracking-wider text-majorelle-blue max-lg:tracking-tighter">
          Hi,
        </p>
        <p className="text-6xl max-md:text-4xl max-lg:tracking-tighter text-raisin-black my-3 anonymous-pro-bold">
          I am Guru Saran M,
        </p>
        <p className="rubik-reg my-3 max-md:text-xl text-2xl tracking-tight max-w-[55ch] leading-10 max-lg:tracking-tighter max-lg:max-w-[45ch]">
          skilled in Web Development, and eager to apply my knowledge to
          real-world projects and expand my skill-set
        </p>

        <div className="group mt-[80px] lg:mt-[200px] p-1 md:p-5 outline-none md:hover:outline-snow md:hover:backdrop-brightness-125 rounded-lg duration-500">
          <p className="group-hover:text-majorelle-blue rubik-md text-3xl max-md:text-2xl text-raisin-black tracking-tight duration-300 max-lg:tracking-tighter max-md:text-majorelle-blue">
            A little bit about me...
          </p>
          <p className="rubik-reg text-xl text-raisin-black tracking-wide leading-9 max-w-[85ch] max-lg:tracking-tighter max-lg:max-w-[50ch]">
            I am currently doing my bachelor's degree in Sathyabama Institute of
            Science and Technology in Computer Science and Engineering. I like
            designing things mainly frontend when I have free time I am probably
            out adventuring 🙂 !
          </p>
        </div>

        <div className="mt-7 lg:mt-[80px] px-1 md:px-5">
          <p className="text-lg md:text-xl text-raisin-black inline-block rubik-sb tracking-wide">
            Get in touch {" 👉 "}
          </p>
          <Link
            href={"mailto:gurusaranm0025@gmail.com"}
            target="_blank"
            className="ml-1 px-1 md:px-3 py-1 rubik-md text-lg tracking-tight md:tracking-normal md:text-xl text-raisin-black hover:text-white hover:bg-viridian/40 duration-300"
          >
            gurusaranm0025@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
