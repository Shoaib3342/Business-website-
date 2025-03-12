const ContCard = ({
  icons,
  title,
  description,
  extraClass = "w-full md:w-[400px]",
}) => {
  return (
    <div className={`p-6 text-center shadow-md rounded-lg ${extraClass}`}>
      <i
        className={`${icons} text-[#388da8] py-4 px-5 text-[24px] rounded-full border-2 border-dotted`}
      ></i>
      <h1 className="mt-4 text-lg font-semibold">{title}</h1>
      <p className="mt-2 text-sm">{description}</p>
    </div>
  );
};

export default ContCard;
