import backgroundImage from "../assets/background.webp";
function Section1() {
  return (
    <section
      className={`bg-[url('https://miro.medium.com/v2/resize:fit:2912/format:webp/1*9x62sMSEsSU56xU5fZUxmQ.png')] max-w-[1540px] bg-cover bg-center bg-no-repeat bg-slate-600 md:bg-slate-400 bg-blend-multiply mx-auto h-screen max-h-[900px]  text-white justify-center flex flex-col p-10`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-4xl font-[200]">DHRUV</div>
      <div className="text-5xl font-[900]">SHARMA</div>
      <div className="text-xl font-[50] tracking-[8px]">Data Scientist</div>
      <div className="gap-4 flex my-5">
        <button className="border border-white rounded-xl py-1 px-7 font-thin">
          Resume
        </button>
        <button className="border border-white rounded-xl py-1 px-7 font-thin">
          Porfolio
        </button>
      </div>
    </section>
  );
}

export default Section1;
