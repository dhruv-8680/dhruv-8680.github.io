import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
function Header() {
  const [toggle, setToggle] = useState(false);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav>
      <div className="h-[50px] max-w-[1440px] flex justify-between items-center mx-auto text-white">
        <div className="px-10 text-left font-[500]">
          <a
            className=" flex gap-2 items-center "
            href="https://github.com/dhruv-8680"
            target="_blank"
          >
            <FaGithub className="text-xl" />
            dhruv-8680
          </a>
        </div>
        <TiThMenu
          className="mx-10 md:hidden"
          onClick={() => setToggle(!toggle)}
        />
        <ul className="md:flex md:flex-row gap-6 hidden">
          <li>
            <a
              href="#"
              className="transition duration-300"
              onClick={() => scrollToSection("section-1")}
            >
              Intro
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition duration-300"
              onClick={() => scrollToSection("section-2")}
            >
              Strengths
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition duration-300"
              onClick={() => scrollToSection("section-3")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition duration-300"
              onClick={() => scrollToSection("section-4")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition duration-300"
              onClick={() => scrollToSection("section-5")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`md:hidden flex flex-col bg-black text-white px-10 pb-5 ${
          toggle ? "" : "hidden"
        }`}
      >
        <ul>
          <li>
            <a
              href="#"
              className="transition duration-300 py-1"
              onClick={() => scrollToSection("section-1")}
            >
              Intro
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition duration-300 py-1"
              onClick={() => scrollToSection("section-2")}
            >
              Strengths
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition duration-300 py-1"
              onClick={() => scrollToSection("section-3")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition duration-300 py-1"
              onClick={() => scrollToSection("section-4")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition duration-300 py-1"
              onClick={() => scrollToSection("section-5")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
