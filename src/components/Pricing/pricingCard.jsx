const PricingCards = ({
  title,
  price,
  description,
  features,
  isPopular,
  bgcolor,
  text,
  border,
}) => {
  return (
    <div
      className={`relative w-full sm:w-1/2 md:w-1/3 lg:w-[26%] h-auto py-6 px-6 bg-[#f2f8fa] rounded-lg ${
        isPopular ? "popular" : ""
      }`}
    >
      {isPopular && (
        <span className="absolute top-2 right-4 bg-[#388da8] text-white text-sm px-4 py-1 rounded-md">
          Popular
        </span>
      )}
      <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
      <p className="text-sm md:text-base text-gray-600 mb-4">{description}</p>
      <h4 className="flex items-center mb-4">
        <sup className="text-xl md:text-2xl font-bold text-[#388da8]">$</sup>
        <h1 className="text-[58px] md:text-[42px] font-[600] text-[#388da8]">
          {price}
        </h1>
        <span className="text-sm md:text-base text-gray-500 ml-2 mt-2">
          / month
        </span>
      </h4>
      <button
        className={`${bgcolor} ${text} ${border} hover:bg-[#388da8] hover:text-white transition-colors duration-300 px-6 py-3 w-full text-sm md:text-base font-medium border-1 rounded-md`}
      >
        Start a free trial
      </button>
      <p className="text-center text-sm text-gray-500 mt-4 mb-4">
        No credit card required
      </p>
      <ul>
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center text-sm md:text-base mb-2 ${
              feature.included ? "" : "text-gray-400"
            }`}
          >
            <i
              className={`${
                feature.included ? "bi bi-check" : "bi bi-x"
              } text-lg font-bold text-[#388da8] mr-2`}
            ></i>
            {feature.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCards;
