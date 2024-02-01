import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <NavBar />
      <section id="hero" className="h-cover flex">
        <Hero />
        {/* <div className=" max-w-[700px] w-full min-h-[400px]">
          <p className="text-2xl rubik-md">A little bit about me...</p>
          <p className="text-2xl rubik-reg tracking-wide leading-9">
            I am currently doing my bachelor's degree in Sathyabama Institute of
            Science and Technology in Computer Science and Engineering.
          </p>
        </div> */}
      </section>

      <section id="projects" className="p-5 backdrop-brightness-110 pl-15">
        <div className="h-full">
          <p className="text-5xl ml-10 text-raisin-black tracking-tighter anonymous-pro-bold underline">
            Projects
          </p>
          <Projects />
        </div>
      </section>
    </>
  );
}
