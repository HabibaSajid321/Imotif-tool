"use client";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
  const [showLink, setShowLink] = useState(false);

  const toggleLink = () => {
    setShowLink(!showLink);
  };

  return (
    <header className="flex flex-wrap flex-row  justify-between md:items-center md:space-x-4  ">
      <a href="#" className="block">
        <h1 className="font-bold text-3xl  font-[Poppins]">
          <span className="text-[#0bd9c588] pl-5">BIOVIS</span>
          <span className="text-[#a09b9c] inline">-HUB</span>
        </h1>
      </a>
      <button
        onClick={toggleLink}
        className="inline-block md:hidden w-10 h-10  text-color-white p-4 "
      >
        <HiBars3 className="" />
      </button>
      <nav
        className={`${
          showLink ? "" : "hidden"
        }  md:inline-flex absolute md:relative top-16 left-0 md:top-0 z-20 flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0`}
      >
        <a
          href="#"
          className="block py-1 px-2 md:text-[20px] md:text-white text-gray-600 hover:bg-gray-100  md:hover:text-gray-600  hover:text-[#0bd9c588]"
        >
          Home
        </a>
        <a
          href="#"
          className="block py-1 px-2  md:text-[20px] md:text-white text-gray-600 hover:bg-gray-100 md:hover:text-gray-600 hover:text-[#0bd9c588]"
        >
          About us
        </a>
        <a
          href="#"
          className="block py-1 px-2  md:text-[20px] md:text-white text-gray-600 hover:bg-gray-100 md:hover:text-gray-600 hover:text-[#0bd9c588]"
        >
          Innovation
        </a>
        <a
          href="#"
          className="block py-1 px-2  md:text-[20px] md:text-white text-gray-600 hover:bg-gray-100 md:hover:text-gray-600 hover:text-[#0bd9c588]"
        >
          Blog
        </a>
        <a
          href="#"
          className="block py-1 px-2  md:text-[20px] md:text-white text-gray-600 hover:bg-gray-100 md:hover:text-gray-600 hover:text-[#0bd9c588]"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
