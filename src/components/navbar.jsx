import { useState } from "react";
import logoImg from "../assets/img/logo.png";
import Button from "../components/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white z-[111] shadow-lg px-6 md:px-10 py-8 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img className="w-10 h-10" src={logoImg} alt="logo" />
        <h1 className="text-[24px] md:text-[20px] font-semibold">
          Quick Start
        </h1>
      </div>
      <button className="lg:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </button>

      <ul
        className={`absolute lg:static mr-[100px] left-0 top-16 lg:top-auto w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-6 px-6 lg:px-0 py-4 lg:py-0 transition-all duration-300 ${
          isOpen ? "block" : "hidden lg:flex"
        }`}
      >
        {["Home", "About", "Features", "Services", "Pricing", "Contact"].map(
          (item) => (
            <li
              key={item}
              className="text-[16px] font-500 text-[#000000c3] gap-[50px] hover:text-[#81bbce]"
            >
              {item}
            </li>
          )
        )}
        <li className="relative group text-[16px] font-500 text-[#000000c4]">
          <button className="flex items-center">
            Dropdown <i className="ml-2 bi bi-chevron-down"></i>
          </button>
          <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md hidden group-hover:block">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Dropdown 1
              </a>
            </li>
            {["Dropdown 2", "Dropdown 3", "Dropdown 4"].map((item, index) => (
              <li key={index}>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </li>

        <Button BtnText="Get Started" />
      </ul>
    </nav>
  );
};

export default Navbar;
