function RectCard({ title, color, abstract, children }) {
  return (
    <div className="flex flex-col cursor-pointer items-center border shadow md:w-auto md:flex-row md:max-w-xl border-gray-700 bg-gray-800 hover:bg-gray-700 mt-10 md:mt-0 sm:mt-0 rounded md:rounded-none">
      <div
        className={`h-[120px] ml-2 w-full text-xl ${color} from-slate-900 bg-gradient-to-tr text-slate-100 rounded-lg justify-center items-center flex `}
      >
        {" "}
        {title}
      </div>
      <div className="flex flex-col w-[1000px] justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {abstract}
        </h5>
        <p className="mb-3 font-normal text-gray-400">{children}</p>
      </div>
    </div>
  );
}

export default RectCard;
