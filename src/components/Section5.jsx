import { SlPhone } from "react-icons/sl";
import { TbMail } from "react-icons/tb";
import { TiLocationOutline } from "react-icons/ti";
function Section5() {
  return (
    <section
      id="section-5"
      className="bg-gray-900 h-auto md:h-[300px] max-w-[1540px] mx-auto text-white flex flex-col justify-center items-center pb-[80px]"
    >
      <div className="text-5xl mb-10 mt-[80px]">Contact Me</div>
      <div className="flex flex-col md:flex-row md:justify-around w-full">
        <div className="grid grid-cols-3 my-4">
          <SlPhone className="text-5xl p-1 text-cyan-800 ml-auto" />
          <div className="px-3 col-span-2">
            <div>Call Me</div>
            <div className="text-sm text-gray-400">+91-880-026-4946</div>
          </div>
        </div>
        <div className="grid grid-cols-3 my-4">
          <TbMail className="text-5xl p-1 text-cyan-800 ml-auto" />
          <div className="px-3 col-span-2">
            <div>Email</div>
            <div className="text-sm text-gray-400">
              dhruv.sharma8680@gmail.com
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 my-4">
          <TiLocationOutline className="text-5xl p-1 text-cyan-800 ml-auto" />
          <div className="px-3 col-span-2">
            <div>Location</div>
            <div className="text-sm text-gray-400">Noida, UP, India</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;
