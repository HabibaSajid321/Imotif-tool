"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React, { FC } from "react";
import Image from "next/image";
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
      <div className=" bg-gray-200 md:h-[610px] h-[600px] bg-bg-gradient-to-b from-yellow-50 via-green-50 to-blue-50">
        <div className="">
          <Navbar />
        </div>

        <div className="flex flex-col items-center text-center justify-center content-center pt-60  ">
          <p className="text-black md:text-4xl text-[20px] md:px-12 px-6  font-semibold leading-relaxed  ">
            MD-TSPM: Thermal Stability Prediction Method for I-motif
          </p>

          <div className="pt-12">
            <button
              className=" flex items-center  bg-gradient-to-r from-gray-500 via-green-700 to-cyan-600 w-full text-[#efe8fd] md:text-2xl text-lg 
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

      <div className="">
        <Homeobj />
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
