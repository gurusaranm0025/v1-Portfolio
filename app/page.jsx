import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <>
      <NavBar />
      <section id="hero" className="h-cover flex">
        <Hero />
      </section>

      <section id="skills" className="p-5 backdrop-brightness-110 pl-5">
        <div className="h-full">
          <p className="text-5xl ml-10 text-raisin-black tracking-tighter anonymous-pro-bold underline">
            Skills:
          </p>
          <Skills />
        </div>
      </section>

      <section id="projects" className="p-5 backdrop-brightness-110 pl-15">
        <div className="h-full">
          <p className="text-5xl ml-10 text-raisin-black tracking-tighter anonymous-pro-bold underline">
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
    </>
  );
}
