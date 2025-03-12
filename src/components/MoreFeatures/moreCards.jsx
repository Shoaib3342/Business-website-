const MoreCards = ({ icons, title, description }) => {
  return (
    <div className="flex gap-[16px] md:gap-[20px] items-start md:text-start sm:text-start">
      <div>
        <i className={`${icons} text-[22px] md:text-[24px] text-[#388da8]`}></i>
      </div>
      <div>
        <h1 className="text-[16px] md:text-[18px] font-[500] text-[#000000ad] mb-1">
          {title}
        </h1>
        <p className="text-[13px] md:text-[14px]">{description}</p>
      </div>
    </div>
  );
};

export default MoreCards;
