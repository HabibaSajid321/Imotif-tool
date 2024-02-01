import React, { FC } from "react";
import Image from "next/image";
import Aboutimage from "../../../public/assets/fyp_pic.jpg";

const AboutImage: FC = () => {
  return (
    <div className=" md:pt-28 pt-12 w-full flex flex-col ">
      <div className="px-2 gap-2 md:pl-5 pl-2">
        <h1 className="text-black md:text-3xl text-xl font-thin">OUR TEAM</h1>
        <h2 className="text-black md:text-5xl text-2xl font-semibold ">
          BIOVIS-HUB
        </h2>
        <div className="md:pt-4 pt-1">
          <div className=" md:w-24 w-20 md:h-1 h-[3px]  bg-[#1f7f62]"></div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col pb-10 w-full ">
        <div className="md:pt-8 pt-4 md:pl-5 pl-12 md:w-1/2 w-full  ">
          <Image
            className="md:w-[400px] w-[300px] md:h-[400px] h-[300px] "
            src={Aboutimage}
            alt="about"
            loading="eager"
          />
        </div>
        <div className="md:w-1/2 w-full md:pt-56 pt-3 flex flex-col   ">
          <div className=" ">
            <h1 className="text-[#000000] font-bold md:text-2xl text-xl md:px-[20px] px-4 md:text-left text-center">
              Dr.Amen Shamim
            </h1>
          </div>

          <p className="text-[#000000] md:text-xl text-[10px] md:px-0 px-10 md:text-left text-center ">
            Assistant Professor Department of Computer Science / Center of
            Advance Studies University Of Agriculture Faisalabad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutImage;
