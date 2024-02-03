import Link from "next/link";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-options-container absolute top-0 right-0 h-full flex items-center justify-around mr-5 gap-10">
        <Link href={"#projects"}>Projects</Link>
        <Link href={"#skills"}>Skills</Link>
        <span>option 3</span>
      </div>
    </nav>
  );
}

export default NavBar;
