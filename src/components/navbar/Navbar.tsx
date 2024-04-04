"use client";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
import Uaflogo from "../../../public/assets/uaf1.png";
import USDA from "../../../public/assets/usda.png";

const Navbar = () => {
  const [showLink, setShowLink] = useState(false);

  const toggleLink = () => {
    setShowLink(!showLink);
  };

  return (
    <header className="flex flex-wrap flex-row justify-center md:items-center bg-white   w-full md:p-4 p-8  relative  border-b-2 border-gray-400 shadow-2xl">
      <div className="hidden md:flex absolute left-0 items-center pl-3">
        <Image src={Uaflogo} alt="UAF logo" width={60} height={40} />
      </div>
      <div className="hidden md:flex absolute right-0 items-center">
        <Image src={USDA} alt="USDA logo" width={90} height={80} />
      </div>
      <button
        onClick={toggleLink}
        className="flex md:hidden text-black absolute left-4 top-4 "
      >
        <HiBars3 className="w-10 h-12" />
        {/* <h1 className="">welcome</h1> */}
      </button>
      <nav
        className={`${
          showLink ? "" : "hidden"
        } md:inline-flex absolute md:relative top-16 left-0 md:top-0 z-20 flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md md:border-none border border-gray-200 md:shadow-none md:bg-transparent p-6 pt-0 md:p-0`}
      >
        <Link href="/">
          <h1 className="block py-1 px-2 md:text-[20px] text-black hover:bg-[#d4d6d388] md:hover:text-gray-600 hover:text-black rounded-md">
            Home
          </h1>
        </Link>
        <Link href="/analyzer">
          <h1 className="block py-1 px-2 md:text-[20px] text-black hover:bg-[#d4d6d388] md:hover:text-gray-600 hover:text-black rounded-md">
            Analyzer
          </h1>
        </Link>
        <Link href="/innovation">
          <h1 className="block py-1 px-2 md:text-[20px] text-black hover:bg-[#d4d6d388] md:hover:text-gray-600 hover:text-black rounded-md">
            Innovation
          </h1>
        </Link>
        <Link href="/about">
          <h1 className="block py-1 px-2 md:text-[20px] text-black hover:bg-[#d4d6d388] md:hover:text-gray-600 hover:text-black rounded-md">
            About
          </h1>
        </Link>
        <Link href="/contact">
          <h1 className="block py-1 px-2 md:text-[20px] text-black hover:bg-[#d4d6d388] md:hover:text-gray-600 hover:text-black rounded-md">
            Contact
          </h1>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
