import AboutImage from "@/components/aboutImage/AboutImage";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import Image from "next/image";
import VCimage from "../../../public/assets/vc.jpg";

const about = () => {
  return (
    <div className="">
      <div className=" bg-gradient-to-r from-gray-700 via-green-700 to-cyan-900 w-full">
        <Navbar />
      </div>
      <div className="text-black md:text-2xl text-base flex content-center justify-center text-left md:m-8 m-4 md:px-56 px-10">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel totam,
          magnam sed nisi nam quae eos vero, ea, impedit excepturi facere quam
          nobis nesciunt recusandae itaque voluptatum hic libero fugit culpa
          fugiat.
        </p>
      </div>

      <div className="flex md:flex-row flex-col pb-10 w-full ">
        <div className="md:pt-8 pt-4 md:pl-5 pl-12 md:w-1/2 w-full  ">
          <Image
            className="md:w-[400px] w-[300px] md:h-[400px] h-[300px]  "
            src={VCimage}
            alt="about"
            loading="eager"
          />
        </div>
        <div className="md:w-1/2 w-full md:pt-56 pt-3 flex flex-col   ">
          <div className=" ">
            <h1 className="text-[#000000] font-bold md:text-2xl text-xl md:px-[20px] px-4 md:text-left text-center">
              Dr.Iqrar
            </h1>
          </div>

          <p className="text-[#000000] md:text-xl text-[10px] md:px-0 px-10 md:text-left text-center ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            adipisci quae culpa in, maiores vel sint fugit, incidunt maxime,
            reiciendis aut eos quisquam! Officiis.
          </p>
        </div>
      </div>

      <div className="px-2 gap-2 md:pl-5 pl-2 flex flex-col content-center justify-center text-center">
        <h1 className="text-black md:text-5xl text-2xl font-semibold ">
          Our Team
        </h1>
        <div className="md:pt-4 pt-1 flex content-center justify-center">
          <div className=" md:w-24 w-20 md:h-1 h-[3px]  bg-[#1f7f62]"></div>
        </div>
      </div>
    </div>
  );
};

export default about;
