import React from "react";
import Image from "next/image";
import Data1 from "../../../public/assets/home1.jpg";
import Data2 from "../../../public/assets/home2.jpg";
import Data3 from "../../../public/assets/home.jpg";

const Homeobj = () => {
  return (
    <div className="text-black mb-10">
      <div className="text-black flex flex-col items-center justify-center ">
        <Image
          src={Data2}
          alt="logo"
          loading="eager"
          width={900}
          height={600}
          // className="md:w-[900px] w-[400px] md:h-[600px] h-[500px]"
        />
        <p className=" text-justify md:px-44 px-4 md:text-base text-xs pt-10">
          Introducing MD-TSPM: A Computational Platform Utilizing Molecular
          Dynamics Simulation for Prediction Thermal Stability of Noncanonical
          Structures. Revolutionizing the Discovery of Therapeutics and
          Materials, Enabling Future Innovations Today.
        </p>
      </div>
      <div className="flex flex-col ">
        <h1 className="md:text-xl text-sm font-bold text-left md:px-44 px-4 "></h1>
        <p className=" flex items-center justify-center text-justify md:px-44 px-4 md:text-base text-xs "></p>
      </div>
      <div className="text-black flex flex-col items-center justify-center ">
        <Image
          src={Data1}
          alt="logo"
          loading="eager"
          width={900}
          height={600}
          // className="md:w-[900px] w-[400px] md:h-[600px] h-[500px] py-10"
        />
        <p className=" flex items-center justify-center text-justify md:px-44 px-4 md:text-base text-xs"></p>
      </div>
    </div>
  );
};

export default Homeobj;
