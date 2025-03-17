import { useState } from "react";
import logoImg from "../assets/img/logo.png";
import Button from "../components/button";
import DropDown from "../components/dropDown";

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
        className={`absolute lg:static mr-[100px] left-0 top-18 lg:top-auto w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-6 px-6 lg:px-0 py-4 lg:py-0 transition-all duration-300 ${
          isOpen ? "block" : "hidden lg:flex"
        }`}
      >
        <li className="text-[16px] font-500 text-[#000000c3] gap-[50px] hover:text-[#81bbce] cursor-pointer">
          Home
        </li>
        <li className="text-[16px] font-500 text-[#000000c3] gap-[50px] hover:text-[#81bbce] cursor-pointer">
          About
        </li>
        <li className="text-[16px] font-500 text-[#000000c3] gap-[50px] hover:text-[#81bbce] cursor-pointer">
          Service
        </li>
        <li className="text-[16px] font-500 text-[#000000c3] gap-[50px] hover:text-[#81bbce] cursor-pointer">
          Featuring
        </li>
        <li>
          <DropDown />
        </li>
        <li className="text-[16px] font-500 text-[#000000c3] gap-[50px] hover:text-[#81bbce] cursor-pointer">
          Contact
        </li>
        <li className="text-[16px] font-500 text-[#000000c3] gap-[50px] hover:text-[#81bbce] cursor-pointer">
          Page
        </li>

        <Button BtnText="Get Started" />
      </ul>
    </nav>
  );
};

export default Navbar;
