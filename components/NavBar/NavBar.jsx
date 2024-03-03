import Link from "next/link";

function NavBar() {
  return (
    <nav className="navbar max-md:invisible">
      <div className="nav-options-container absolute top-0 right-0 h-full flex items-center justify-around mr-5 gap-20">
        <Link
          href={
            "https://drive.google.com/file/d/1t3KI22KRtHOKSOsyj6pYj6Q7Vxrj1rsX/view?usp=sharing"
          }
          target="_blank"
          className="text-xl anonymous-pro-reg tracking-tighter text-raisin-black hover:text-majorelle-blue hover:underline duration-300"
        >
          Check out my resume
        </Link>
        <Link
          href={"#projects"}
          className="text-xl anonymous-pro-reg tracking-tight text-raisin-black hover:text-majorelle-blue hover:underline duration-300"
        >
          Projects
        </Link>
        <Link
          href={"#skills"}
          className="text-xl anonymous-pro-reg tracking-tight text-raisin-black hover:text-majorelle-blue hover:underline duration-300"
        >
          Skills
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
