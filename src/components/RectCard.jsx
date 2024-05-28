function RectCard({ title, color, abstract, children }) {
  return (
    <div className="flex flex-col cursor-pointer items-center border shadow md:w-auto md:flex-row md:max-w-xl border-cyan-900 bg-slate-900 hover:bg-cyan-900 mt-10 md:mt-0 sm:mt-0 rounded md:rounded-none">
      <div
        className={`h-[160px] md:h-[120px] md:ml-2 mt-2 w-[80%] md:w-full text-xl ${color} from-slate-900 bg-gradient-to-tr text-slate-100 rounded-lg justify-center items-center flex `}
      >
        {" "}
        {title}
      </div>
      <div className="flex flex-col md:w-[1000px] justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {abstract}
        </h5>
        <p className="mb-3 font-normal text-gray-400">{children}</p>
      </div>
    </div>
  );
}

export default RectCard;
