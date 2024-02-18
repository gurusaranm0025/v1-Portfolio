import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import AnimationWrapper from "@/components/PageAnimation/AnimationWrapper";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <AnimationWrapper>
      <div className="w-full backdrop-brightness-110">
        <NavBar />
      </div>
      <section id="hero" className="h-cover backdrop-brightness-110 flex">
        <Hero />
      </section>

      <section id="skills" className="p-5 backdrop-brightness-110 pl-5">
        <div className="h-full">
          <p className="text-3xl md:text-5xl ml-4 md:ml-10 text-raisin-black tracking-tighter nunito-sb underline max-md:mt-1">
            Skills:
          </p>
          <Skills />
        </div>
      </section>
      <section id="projects" className="p-5 backdrop-brightness-110 pl-15">
        <div className="h-full">
          <p className="text-3xl md:text-5xl ml-4 md:ml-10 text-raisin-black tracking-tighter nunito-sb underline max-md:mt-1">
            Projects:
          </p>
          <Projects />
        </div>
      </section>
      <section className="p-5 backdrop-brightness-110 pl-5">
        <div className="h-full">
          <Footer />
        </div>
      </section>

    </AnimationWrapper>
  );
}
