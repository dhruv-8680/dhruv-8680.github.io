import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Accordian({ title, children }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" bg-black border border-cyan-900 rounded-xl w-[300px] md:w-[400px] my-5  py-4 px-4 item-center">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        <div>{title}</div>
        <div>
          <IoIosArrowDown
            className={`transition-transform transform duration-500 ${
              toggle ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      <div className={`${toggle ? "" : "hidden"}`}>
        <hr className="mx-auto my-5 w-full" />
        <div className=" max-h-56 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

export default Accordian;
