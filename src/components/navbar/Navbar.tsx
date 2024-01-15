"use client";

import { Routes } from "@/types/componentsType";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

const Navbar: FC = () => {
  const pathname = usePathname();
  const routes: Routes[] = [
    {
      name: "ABOUT",
      path: "/",
    },
    {
      name: "TECHNOLOGY",
      path: "/",
    },
    {
      name: "INNOVATION",
      path: "/",
    },
  ];

  return (
    <div className="pb-3 flex justify-center items-center pt-">
      <div className="w-full flex justify-center items-center lg:gap-7 gap-3 px-5 ">
        {routes.map((val, i) => {
          return (
            <Link
              key={i}
              href={val.path}
              className={` font-normal lg:text-2xl text-sm lg:border-b-[2px] border-b-[1px] ${
                val.path === pathname
                  ? "border-b-[#ffffff] text-white"
                  : "border-b-white text-[#2B2D42]"
              } hover:border-b-[#F0841E] hover:text-[#F0841E] transition-all duration-200`}
            >
              {val.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
