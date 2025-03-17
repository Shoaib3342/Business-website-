import { useState } from "react";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 px-4 sm:px-6">
      {items.map((item, index) => (
        <div
          key={index}
          className={`mb-4 border bg-[#ffff] border-gray-300 rounded-md overflow-hidden transition-all ${
            openIndex === index ? "shadow-md" :"shadow-md"
          }`}
        >
          <button
            className="w-full flex justify-between items-center py-4 px-5 transition-all duration-300"
            onClick={() => toggleAccordion(index)}
          >
            <span
              className={`group text-[16px] font-medium ${
                openIndex === index ? "text-[#449eb7]" : "text-gray-700"
              } hover:text-[#449eb7]`}
            >
              {item.title}
            </span>
            <i
              className={`bi bi-chevron-right transition-transform duration-300 ${
                openIndex === index
                  ? "text-[#449eb7] rotate-90"
                  : "text-gray-700 rotate-0"
              } hover:text-[#449eb7]`}
            ></i>
          </button>
          <div
            className={`overflow-hidden transition-all bg-white ${
              openIndex === index
                ? "max-h-40 opacity-100 py-4 px-5 mt-[-20px]"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="mt-2">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
