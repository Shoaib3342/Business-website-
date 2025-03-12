const DetailCard = ({ title, description, icons, IconText, btn }) => {
  return (
    <div className="w-full md:w-[80%] lg:w-[34%] h-auto bg-[#f5f9fa] mt-[20px] lg:mt-[20px] rounded-[15px] py-[22px] px-[30px] text-center lg:text-left">
      <h3 className="text-[22px] md:text-[24px] lg:text-[26px] mb-[15px] font-[500] leading-[32px] text-[#000000af]">
        {title}
      </h3>
      <p className="text-[14px] md:text-[16px] text-[#00000085]">
        {description}
      </p>
      {icons && (
        <ul className="mb-[34px]">
          <li>
            <i className={icons}></i> {IconText}
          </li>
        </ul>
      )}
      <a
        href="#"
        className="inline-block py-[10px] px-[24px] rounded-md bg-[#388da8] text-[#fff] mt-4"
      >
        {btn}
      </a>
    </div>
  );
};
export default DetailCard;
