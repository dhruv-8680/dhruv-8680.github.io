import { FaLinkedin, FaGithub, FaKaggle, FaBehance } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
function Footer() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className=" h-auto md:h-[180px] w-full md:w-[1560px] mx-auto bg-black text-white flex md:flex-row flex-col justify-around px-10 items-start pt-[40px]">
        <div className="text-4xl md:text-6xl my-2 mx-auto md:mx-0 ">
          <a
            href="#"
            className="transition duration-300"
            onClick={() => scrollToSection("section-1")}
          >
            DHRUV
          </a>
        </div>
        <div className="mt-5 md:mt-0">
          <div className="text-gray-400 py-2">
            <a
              href="#"
              className="transition duration-300 py-1"
              onClick={() => scrollToSection("section-1")}
            >
              Intro
            </a>
          </div>
          <div className="text-gray-400 py-2">
            <a
              href="#"
              className="transition duration-300"
              onClick={() => scrollToSection("section-2")}
            >
              Strengths
            </a>
          </div>
          <div className="text-gray-400 py-2">
            <a
              href="#"
              className="transition duration-300"
              onClick={() => scrollToSection("section-3")}
            >
              Skills
            </a>
          </div>
        </div>
        <div className="mt-0">
          <div className="text-gray-400 py-2">
            <a
              href="#"
              className="transition duration-300"
              onClick={() => scrollToSection("section-4")}
            >
              Projects
            </a>
          </div>
          <div className="text-gray-400 py-2">Resume</div>
          <div className="text-gray-400 py-2">
            <a href="https://dhruv-8680.github.io/portfolio/" target="_blank">
              Porfolio
            </a>
          </div>
        </div>
        <div className="grid grid-cols-5 md:grid-cols-3  gap-6 mt-5 md:my-0">
          <a
            href="https://www.linkedin.com/in/dhruv-sharma-8b7701145/"
            target="_blank"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a href="https://github.com/dhruv-8680" target="_blank">
            <FaGithub className="text-3xl" />
          </a>
          <a href="https://www.kaggle.com/dhruv8680" target="_blank">
            <FaKaggle className="text-3xl" />
          </a>
          <a href="https://medium.com/@dhruv.sharma8680" target="_blank">
            <FaMedium className="text-3xl" />
          </a>
          <FaBehance className="text-3xl" />
        </div>
      </div>
      <div className="text-white  w-full bg-black flex">
        <p className="mx-auto py-10 text-sm text-gray-600">
          © 2024 Dhruv Sharma. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
