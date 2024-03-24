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
      <div className="relative bg-gray-200 md:bg-gradient-to-b from-yellow-50 via-green-50 to-blue-50 ">
        <div className="">
          <Navbar />
        </div>
        <div className="shadow-lg">
          <div className="relative ">
            <video
              autoPlay
              muted
              loop
              className="absolute inset-0 w-full md:h-[590px] h-[200px] object-cover"
            >
              <source src="/assets/animation/moviefinal.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="md:w-1/2 w-1/3 md:px-28 px-24">
              <div className="flex flex-col items-center text-center justify-center content-center pt-46 md:h-[590px] h-[200px] relative z-10 ">
                {" "}
                <div className=" shadow-2xl bg-opacity-30   rounded-2xl flex flex-col items-center text-center justify-center content-center md:p-4 p-2 ">
                  <p className="text-black md:text-4xl text-[10px]  font-semibold  leading-relaxed ">
                    MD-TSPM: Thermal Stability Prediction Method for I-motif
                  </p>

                  <div className="md:pt-12 pt-4">
                    <button
                      className="flex items-center bg-gradient-to-r from-gray-800 via-green-800 to-cyan-900 w-full text-[#efe8fd] md:text-xl text-xs md:px-3 px-2 md:py-1 py-0 md:rounded-full rounded-2xl hover:from-gray-300 hover:via-green-400 hover:to-cyan-500 hover:text-black transition-all duration-300 bg-opacity-50 backdrop-filter backdrop-blur-md justify-center md:max-w-md mx-auto"
                      onClick={handleClick}
                    >
                      <span className="flex-grow">Go to Analyzer</span>
                      <span className="md:pl-4 pl-8">
                        <FaArrowRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
