import AboutImage from "@/components/aboutImage/AboutImage";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React, { FC } from "react";

const Homepage: FC = () => {
  return (
    <div className="flex flex-col text-white ">
      <div className=" bg-gradient-to-r from-gray-700 via-green-700 to-cyan-900 lg:w-full  lg:h-[610px] ">
        <div className="pt-6">
          <Navbar />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="text-white lg:text-5xl text-[30px] lg:px-5 px-6 font-semibold leading-relaxed pt-24">
            MD-TSPM: Thermal Stability Prediction Method for Cancer Associated
            I-motifs
          </p>

          <div></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-[#1f7f6d]  text-4xl font-medium">
          ABOUT BIOVIS-HUB
        </h1>

        <h1 className="text-[#404040]   text-5xl text-center font-bold ">
          Biomanufacturing is our future
        </h1>
        <p className="text-[#404040]  text-xl font-medium text-center  ">
          A Web Portal for Bioinformatics Visualization Tools
        </p>
      </div>
      <div className="flex justify-center items-center pt-12">
        <iframe
          width="760"
          height="400"
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
