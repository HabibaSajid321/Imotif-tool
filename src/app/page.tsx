import AboutImage from "@/components/aboutImage/AboutImage";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React, { FC } from "react";

const Homepage: FC = () => {
  return (
    <div className="flex flex-col text-white ">
      <div className=" bg-gradient-to-r from-gray-700 via-green-700 to-cyan-900 w-full  md:h-[610px] h-[600px]">
        <div className="pt-6">
          <Navbar />
        </div>
        <div className="flex flex-col items-center text-center justify-center pt-40">
          <p className="text-white md:text-4xl text-[20px] md:px-12 px-6  font-semibold leading-relaxed ">
            MD-TSPM: Thermal Stability Prediction Method for Cancer Associated
            I-motifs
          </p>

          <div className="pt-20">
            <button className=" bg-slate-400 text-black md:text-2xl text-lg  md:px-10 px-6">
              Go to analyze
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:gap-5 ">
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
          A Web Portal for Bioinformatics Visualization Tools
        </p>
      </div>
      <div className="flex justify-center items-center pt-12 ">
        <iframe
          className="md:w-[760px] w-[400px] md:h-[400px] h-[200px] "
          // width="760"
          // height="400"
          src="https://www.youtube.com/embed/kGihh-8MI4U?si=v7qZjyQ3Pd7r2u4H"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <AboutImage />

      <Footer />
    </div>
  );
};

export default Homepage;
