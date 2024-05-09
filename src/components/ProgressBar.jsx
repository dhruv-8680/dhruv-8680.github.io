function ProgressBar({ tagName, tagPercent, widthPercent }) {
  return (
    <div className="my-2">
      <div className="flex justify-between pb-2 px-1 text-gray-400">
        <div>{tagName}</div>
        <div>{tagPercent}%</div>
      </div>
      <div className="w-full h-[5px] bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className={`bg-blue-600 ${widthPercent} h-[5px] text-[8px] font-base text-blue-100 text-center p-0.5 leading-none rounded-full`}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
