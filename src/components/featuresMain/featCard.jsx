const FeatCards = ({ icons, title, description, isFirst }) => {
  return (
    <div
      className={`flex gap-4 w-full md:w-[70%] py-[30px] rounded-[10px] px-[20px] md:ml-[50px] mt-[10px] ${
        isFirst ? "bg-[#cfe6ed5a]" : "bg-[#f7fbfc00]"
      }`}
    >
      <div>
        <i
          className={`${icons} text-[22px] p-[10px] bg-[#ffff] rounded-full text-[#449eb7] shadow-md`}
        ></i>
      </div>
      <div>
        <h1 className="text-[18px] font-[400] mb-2">{title}</h1>
        <p className="text-[14px] md:text-[16px]">{description}</p>
      </div>
    </div>
  );
};

export default FeatCards;
