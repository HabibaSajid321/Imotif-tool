"use client";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";

const Navbar = () => {
  const [showLink, setShowLink] = useState(false);

  const toggleLink = () => {
    setShowLink(!showLink);
  };

  return (
    <header className="flex flex-wrap flex-row  justify-center md:items-center md:space-x-4  bg-gradient-to-r from-gray-700 via-green-700 to-cyan-900 w-full md:p-6 p-1  ">
      <button
        onClick={toggleLink}
        className="inline-block md:hidden  text-color-white pl-[305px]"
      >
        <HiBars3 className="w-10 h-12    " />
      </button>
      <nav
        className={`${
          showLink ? "" : "hidden"
        }  md:inline-flex absolute md:relative top-16 left-0 md:top-0 z-20 flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0`}
      >
        <Link href="/">
          <h1
            className="block py-1 px-2  md:text-[20px] md:text-white text-gray-600 hover:bg-gray-100 
md:hover:text-gray-600 hover:text-[#15634288]"
          >
            Home
          </h1>
        </Link>
        <Link href="/analyzer">
          <h1
            className="block py-1 px-2  md:text-[20px] md:text-white text-gray-600 hover:bg-gray-100 
md:hover:text-gray-600 hover:text-[#0bd9c588]"
          >
            Analyzer
          </h1>
        </Link>
        <Link href="/contact">
          <h1
            className="block py-1 px-2  md:text-[20px] md:text-white text-gray-600 hover:bg-gray-100 
md:hover:text-gray-600 hover:text-[#0bd9c588]"
          >
            Innovation
          </h1>
        </Link>
        <Link href="/about">
          <h1
            className="block py-1 px-2  md:text-[20px] md:text-white text-gray-600 hover:bg-gray-100 
md:hover:text-gray-600 hover:text-[#0bd9c588]"
          >
            About
          </h1>
        </Link>
        <Link href="/contact">
          <h1 className="block py-1 px-2  md:text-[20px] md:text-white text-gray-600 hover:bg-gray-100 md:hover:text-gray-600 hover:text-[#0bd9c588]">
            Contact
          </h1>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
