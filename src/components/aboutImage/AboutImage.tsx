import React, { FC } from "react";
import Image from "next/image";
import Aboutimage from "../../../public/assets/fyp_pic.jpg";

const AboutImage: FC = () => {
  return (
    <div className="pt-28 w-full flex flex-col">
      <div className="px-2 gap-2">
        <h1 className="text-black text-3xl font-thin">OUR TEAM</h1>
        <h2 className="text-black text-5xl font-semibold ">BIOVIS-HUB</h2>
        <div className="pt-4">
          <div className=" w-24 h-1 bg-[#1f7f62]"></div>
        </div>
      </div>
      <div className=" w-full h-[400px] flex  ">
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src={Aboutimage}
            alt="about"
            width={380}
            height={600}
            loading="eager"
          />
        </div>
        <div className="flex flex-col pt-56 text-left items-center">
          <h1 className="text-[#000000] font-bold text-2xl">Dr.Amen Shamim</h1>
          <p className="text-black text-xl px-3">
            Assistant Professor Department of Computer Science / Center of
            Advance Studies University Of Agriculture Faisalabad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutImage;
