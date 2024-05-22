import { FaMicrochip } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { GrSystem } from "react-icons/gr";
import { FaBoxOpen } from "react-icons/fa";
function Section2() {
  return (
    <section
      id="section-2"
      className="bg-gray-900 h-auto md:h-[800px] max-w-[1540px] mx-auto text-white flex flex-col justify-center items-center"
    >
      <div className="md:text-5xl text-4xl mt-[80px] md:mt-0">
        What I Am Great At
      </div>
      <div className="max-w-[700px] text-center pt-5 px-10 md:px-auto text-gray-400">
        I don't just play with tech; I make it dance. From System Design to
        Prodcuct Delivery, I've got the whole toolkit in my arsenal. When it
        comes to Gen AI and Data Science, I don't just keep up; I set the pace.
        Because in this game, I'm not just a player – I'm the one writing the
        rules.
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10 pb-[80px] md:pb-0">
        <div className="w-[150px] md:w-[200px] cursor-pointer bg-black hover:scale-110 duration-300 shadow-2xl shadow-fuchsia-900 h-[160px] md:h-[220px] rounded text-gray-400 flex flex-col justify-center items-center">
          <GrSystem className="text-4xl md:text-6xl mb-5 text" />
          <div>System Design</div>
        </div>
        <div className="w-[150px] md:w-[200px] bg-black cursor-pointer hover:scale-110 duration-300 shadow-2xl shadow-blue-900 h-[160px] md:h-[220px] rounded text-gray-400 flex flex-col justify-center items-center text-center">
          <FaBoxOpen className="text-4xl md:text-6xl mb-5 text" />
          <div>Product Development</div>
        </div>
        <div className="w-[150px] md:w-[200px] bg-black  cursor-pointer hover:scale-110 duration-300 shadow-2xl shadow-cyan-900 h-[160px] md:h-[220px] rounded text-gray-400 flex flex-col justify-center items-center">
          <FaMicrochip className="text-4xl md:text-6xl mb-5 text" />
          <div>AI & Research</div>
        </div>
        <div className="w-[150px] md:w-[200px] bg-black  cursor-pointer hover:scale-110 duration-300 shadow-2xl shadow-violet-900 h-[160px] md:h-[220px] rounded text-gray-400 flex flex-col justify-center items-center">
          <FaCode className="text-4xl md:text-6xl mb-5 text" />
          <div>Web Development</div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
