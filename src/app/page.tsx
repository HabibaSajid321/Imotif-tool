"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React, { FC } from "react";
import Image from "next/image";
import Usdalogo from "../../public/assets/usda.png";
import Uaflogo from "../../public/assets/uaf1.png";
import { FaArrowRight } from "react-icons/fa";
import Homeobj from "@/components/home/Homeobj";
import Link from "next/navigation";
import router, { useRouter } from "next/navigation";
const Homepage: FC = () => {
  const router = useRouter();
  const handleClick = () => {
    return router.push("/analyzer");
  };
  return (
    <div className="flex flex-col text-white ">
      <div className=" bg-gray-200 md:h-[610px] h-[600px]">
        <div className="">
          <Navbar />
        </div>
        <div className="flex justify-between ">
          <Image
            src={Uaflogo}
            alt="logo"
            loading="eager"
            className="md:w-[135px] w-[100px] md:h-[105px] h-[75px] pt-4 pl-12"
          />

          <Image
            src={Usdalogo}
            alt="logo"
            loading="eager"
            className="md:w-[135px] w-[110px] md:h-[105px] h-[75px] pr-10 "
          />
        </div>

        <div className="flex flex-col items-center text-center justify-center pt-28">
          <p className="text-black md:text-4xl text-[20px] md:px-12 px-6  font-semibold leading-relaxed ">
            MD-TSPM: Thermal Stability Prediction Method for I-motif
          </p>

          <div className="pt-12">
            <button
              className=" flex items-center  bg-gradient-to-r from-gray-700 via-green-700 to-cyan-900 w-full text-[#efe8fd] md:text-2xl text-lg 
                md:px-10 px-6 md:py-1 rounded-full hover:from-gray-300 hover:via-green-400 hover:to-cyan-500 hover:text-black transition-all duration-300 "
              onClick={handleClick}
            >
              Go to Submission portal
              <span className="pl-4">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center md:gap-5 pt-8 ">
        <h1 className="text-[#1f7f6d]  md:text-3xl text-xl font-medium ">
          ABOUT BIOVIS-HUB
        </h1>

        <div>
          <h1 className="text-[#404040]  md:text-5xl text-xl text-center font-bold ">
            Biomanufacturing
            <span className="inline text-[#1B7341]"> is our future</span>
          </h1>
        </div>

        <p className="text-[#404040]  md:text-2xl text-[15px] md:font-medium  text-center">
          A Web Portal for identification of thermal non-canonical
        </p>
      </div>
      <div className="pt-12">
        <Homeobj />
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
