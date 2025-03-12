const FeatCards = ({ icons, title, Description }) => {
  return (
    <div className="flex w-full sm:w-[50%] lg:w-[30%] group">
      <div className="p-3 sm:p-4 bg-[#d1e5ec] group-hover:bg-[#388da8] cursor-pointer transition-all duration-300">
        <i
          className={`${icons} text-2xl sm:text-3xl text-[#388da8] group-hover:text-white cursor-pointer transition-all duration-300`}
        ></i>
      </div>
      <div className="ml-4">
        <h1 className="text-lg sm:text-xl font-medium text-black group-hover:text-[#388da8] cursor-pointer transition-all duration-300">
          {title}
        </h1>
        <p className="text-sm sm:text-base cursor-pointer">{Description}</p>
      </div>
    </div>
  );
};

export default FeatCards;
