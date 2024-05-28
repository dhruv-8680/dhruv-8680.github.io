import backgroundImage from "../assets/background.webp";
function Section1() {
  return (
    <section
      id="section-1"
      className={`max-w-[1540px] bg-cover bg-center bg-no-repeat bg-slate-600 md:bg-slate-500 bg-blend-multiply mx-auto md:h-[100vh] max-h-[900px]  text-white justify-center flex flex-col p-10`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex md:flex-row flex-col md:mt-0 mt-20">
        <div className="px-1">
          <div className="md:text-7xl text-4xl font-[300]">DHRUV</div>
          <div className="md:text-8xl text-5xl font-[900]">SHARMA</div>
          <div className="md:text-4xl text-xl font-[50] md:tracking-[18px] tracking-[8px]">
            Data Scientist
          </div>
        </div>
        <div className="h-[20px] md:h-[220px] border-b md:border-l border-purple-200"></div>
        <div className="px-1 md:px-5 w-full md:w-[550px] text-left">
          <span>
            Experienced in leading product development for AI-driven
            applications, adept at crafting and deploying innovative algorithms.
            Proficient in generative AI, neural networks, NLP, computer vision,
            and predictive modeling. Skilled in Python, TensorFlow, Langchains,
            Scikit-Learn, and more.{" "}
          </span>
          <span className="md:block hidden">
            Demonstrated expertise in optimizing model performance for
            real-world deployment. Strong problem-solving and analytical
            abilities, committed to staying abreast of industry advancements.
            Effective collaborator across teams, consistently delivering
            top-tier results.
          </span>
        </div>
      </div>
      <div className="gap-4 flex my-20">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none  dark:focus:ring-green-800">
          <span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Resume
          </span>
        </button>
        <a
          href="https://dhruv-8680.github.io/portfolio/"
          className="block"
          target="_blank"
        >
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br to-green-400 from-blue-600 group-hover:from-blue-600 group-hover:to-green-400 hover:text-white text-white focus:ring-4 focus:outline-none  dark:focus:ring-green-800">
            <span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Porfolio
            </span>
          </button>
        </a>
      </div>
    </section>
  );
}

export default Section1;
