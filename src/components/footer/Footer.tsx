import { Routes } from "@/types/componentsType";
import Link from "next/link";
import React, { FC } from "react";

const Footer: FC = () => {
  const informationRoutes: Routes[] = [
    { name: "About Us ", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    // { name: "Privacy Policy", path: "/" },
    { name: "Innovation", path: "/" },
  ];

  return (
    <>
      <div className="bg-gray-700 flex justify-center items-center py-10 border-t-3 border-t-[#363636] px-5 md:px-10 lg:px-28">
        <div className="w-full md:w-[1170px] flex flex-col md:flex-row md:justify-between justify-center items-center md:pl-0 pl-12">
          <div className="w-full lg:w-1/2 pb-6 md:pb-0 ">
            <h1 className="font-bold uppercase text-white pb-4 md:pb-7 md:text-xl text-base ">
              About us
            </h1>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="text-[#f9feff] md:text-sm text-xs text-left  font-semibold">
                  BioInformatics Research Lab (BRL)
                </p>
              </li>
              <li>
                <p className="text-[#f9feff]  md:text-sm text-xs text-left font-semibold">
                  Phone: +92-41-9201919
                </p>
              </li>
              <li>
                <p className="text-[#f9feff] md:text-sm text-xs text-left font-semibold">
                  Email: amen.shamim@uaf.edu.pk
                </p>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/2">
            <h1 className="font-bold uppercase text-white pb-4 md:pb-7 md:text-xl text-base">
              Information
            </h1>
            <ul className="flex flex-col gap-2 md:gap-3 font-semibold">
              {informationRoutes.map((val, i) => (
                <li key={i}>
                  <Link
                    href={val.path}
                    className="text-[#f9feff] md:text-sm text-xs hover:text-[#7daaaa] transition duration-200"
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
        Copyright ©2024 All rights reserved
      </div>
    </>
  );
};

export default Footer;
