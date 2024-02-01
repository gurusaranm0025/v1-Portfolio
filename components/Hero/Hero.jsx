function Hero() {
  return (
    <div className="h-cover ml-20 flex items-center relative">
      <div className="max-h-[600px] h-full">
        <p className="text-5xl my-3 anonymous-pro-bold tracking-wider text-majorelle-blue">
          Hi,
        </p>
        <p className="text-6xl text-raisin-black my-3 anonymous-pro-bold">
          I am Guru Saran M,
        </p>
        <p className="rubik-reg my-3 text-2xl tracking-tight max-w-[55ch] leading-10">
          skilled in Web Development, and eager to apply my knowledge to
          real-world projects and expand my skill-set
        </p>

        <div className="group mt-[200px] p-5 outline-none hover:outline-snow hover:backdrop-brightness-125 rounded-md duration-500">
          <p className="group-hover:text-majorelle-blue rubik-md text-3xl text-raisin-black tracking-tight duration-300">
            A little bit about me...
          </p>
          <p className="rubik-reg text-xl text-raisin-black tracking-wide leading-9 max-w-[85ch]">
            I am currently doing my bachelor's degree in Sathyabama Institute of
            Science and Technology in Computer Science and Engineering.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
