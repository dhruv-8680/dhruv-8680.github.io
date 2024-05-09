function RectCard({ image, abstract, children }) {
  return (
    <div className="flex flex-col cursor-pointer items-center bg-white border border-gray-200 shadow md:w-auto md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg p-2"
        src={image}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {abstract}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {children}
        </p>
      </div>
    </div>
  );
}

export default RectCard;
