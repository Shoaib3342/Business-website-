const ServiceCard = ({
  CardIcons,
  color,
  title,
  description,
  links,
  bgcolor,
  bordercolor,
}) => {
  return (
    <div className="w-[85%] flex justify-center ml-[50px] gap-5 border border-[#00000043] p-6 rounded-md bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="mt-2">
        <i
          className={`${CardIcons} ${color} ${bgcolor} ${bordercolor} border text-[30px] py-4 mt-5 px-5 rounded-lg`}
        ></i>
      </div>
      <div>
        <h1 className="text-lg font-medium text-[#00000087] mb-1">{title}</h1>
        <p className="text-[#00000082] mb-4 text-sm md:text-base">
          {description}
        </p>
        <a href="#" className="text-[#449eb7] font-medium text-sm md:text-base">
          {links}
        </a>
      </div>
    </div>
  );
};
export default ServiceCard;
