import { Routes } from "@/types/componentsType";
import Link from "next/link";
import React, { FC } from "react";

const Footer: FC = () => {
  const informationRoutes: Routes[] = [
    { name: "About Us ", path: "/" },
    { name: "Contact Us", path: "/" },
    { name: "Privacy Policy", path: "/" },
    { name: "Innovation", path: "/" },
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-gray-700 via-green-700 to-cyan-900 min-h-[100px] flex  justify-center items-center py-10 border-t-[3px] border-t-[#363636]">
        <div className="w-full md:w-[1170px] flex  gap-6 lg:gap-0 lg:flex-row lg:justify-between items-center lg:px-0 px-5 ">
          <div className="w-full lg:w-1/2  ">
            <h1 className="font-bold uppercase text-white pb-4 md:pb-7 text-xl">
              about us
            </h1>
            <ul className="flex flex-col gap-4 ">
              <li>
                <p className="text-[#f9feff] text-sm text-left">
                  Lorem, ipsum dolor.
                </p>
              </li>
              <li className="flex justify-start items-center gap-2">
                <span className="text-[#f9feff] text-sm hover:text-[#F0841E] transition duration-200">
                  1734 Stonecoal Road
                </span>
              </li>
              <li className="flex justify-start items-center gap-2">
                <span className="text-[#f9feff] text-sm hover:text-[#F0841E] transition duration-200">
                  +021-95-51-84
                </span>
              </li>
              <li className="flex justify-start items-center gap-2">
                <span className="text-[#f9feff] text-sm hover:text-[#F0841E] transition duration-200">
                  email@email.com
                </span>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/2">
            <h1 className="font-bold uppercase text-white pb-4 md:pb-7 text-xl">
              Information
            </h1>
            <ul className="flex flex-col gap-2 md:gap-3">
              {informationRoutes.map((val, i) => (
                <li key={i}>
                  <Link
                    href={val.path}
                    className="text-[#f9feff] text-sm hover:text-[#F0841E] transition duration-200"
                  >
                    {val.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center h-10 bg-[#2c2c2c] text-[#f9feff] text-sm">
        Copyright ©2023 All rights reserved
      </div>
    </>
  );
};

export default Footer;
