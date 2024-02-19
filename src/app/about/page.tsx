import AboutImage from "@/components/aboutImage/AboutImage";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import Image from "next/image";
import VCimage from "../../../public/assets/vc.jpg";
import MamImg from "../../../public/assets/fyp_pic.jpg";
import Hassanimg from "../../../public/assets/hassanimg.jpg";
import Footer from "@/components/footer/Footer";
const about = () => {
  return (
    <div className="">
      <div className=" bg-gradient-to-r from-gray-700 via-green-700 to-cyan-900 w-full">
        <Navbar />
      </div>
      <div className="text-gray-700  md:text-3xl text-base md:font-bold font-semibold flex content-center justify-center pt-6 text-left md:m-8 m-4 md:px-42 px-10">
        <h1>Meet Our Officials: Building Strong Collaborations for Success</h1>
      </div>

      <div className="flex md:flex-row flex-col pb-10 w-full md:px-44 pt-7 ">
        <div className="md:pt-14 pt-4  flex flex-col justify-center content-center items-center md:w-1/2 w-full  ">
          <Image
            className="md:w-[400px] w-[300px] md:h-[400px] h-[300px]  "
            src={VCimage}
            alt="about"
            loading="eager"
          />
        </div>
        <div className="md:w-1/2 w-full md:pt-72 pt-3 flex flex-col justify-center content-center  ">
          <div className="flex flex-col ">
            <h1 className="text-[#000000] font-bold md:text-3xl text-xl md:px-[20px] px-4  test-left">
              Vice Chancellor
            </h1>
            <h1 className="text-black text-base md:px-[20px] px-4 font-medium  text-left">
              University of Agriculture FSD
            </h1>

            <h1 className="text-[#1f7f6d] font-semibold md:text-xl text-lg md:px-[20px] px-4 text-left ">
              Dr.Rana Iqrar Ahmed Khan
            </h1>
          </div>

          <p className="text-[#000000] md:text-lg text-[13px] md:px-[20px] px-4 pt-4 text-justify ">
            Our Honorable Vice Chancellor, a beacon of wisdom and vision,
            empowers us with invaluable resources to pursue excellence
          </p>
        </div>
      </div>

      <div className="px-2 gap-2  flex flex-col content-center justify-center text-center mt-24">
        <h1 className="text-black md:text-5xl text-2xl font-semibold ">
          Our Team
        </h1>
        <div className="md:pt-4 pt-1 flex content-center justify-center">
          <div className=" md:w-24 w-20 md:h-1 h-[3px]  bg-[#1f7f62]"></div>
        </div>

        <div className="flex md:flex-row flex-col pb-10 w-full md:px-44 pt-7 ">
          <div className="md:pt-8 pt-4 md:pl-5 pl-12 md:w-1/2 w-full  ">
            <Image
              className="md:w-[400px] w-[300px] md:h-[400px] h-[300px]  "
              src={MamImg}
              alt="about"
              loading="eager"
            />
          </div>
          <div className="md:w-1/2 w-full md:pt-56 pt-3 flex flex-col  pl-6 ">
            <div className="flex flex-col ">
              <h1 className="text-[#1f7f6d] font-semibold md:text-xl text-lg md:px-[20px] px-4 text-left ">
                Dr.Amen Shamim
              </h1>
            </div>
            <p className="text-[#000000] md:text-lg text-[13px] md:px-[20px] px-4 pt-4 text-justify ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              adipisci quae culpa in, maiores vel sint fugit, incidunt maxime.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col pb-10 w-full md:px-44 pt-7 ">
          <div className="md:pt-8 pt-4 md:pl-5 pl-12 md:w-1/2 w-full  ">
            <Image
              className="md:w-[340px] w-[300px] md:h-[420px] h-[300px]  "
              src={Hassanimg}
              alt="about"
              loading="eager"
            />
          </div>
          <div className="md:w-1/2 w-full md:pt-56 pt-3 flex flex-col  pl-6 ">
            <div className="flex flex-col ">
              <h1 className="text-[#1f7f6d] font-semibold md:text-xl text-lg md:px-[20px] px-4 text-left ">
                Dr.Amen Shamim
              </h1>
            </div>
            <p className="text-[#000000] md:text-lg text-[13px] md:px-[20px] px-4 pt-4 text-justify ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              adipisci quae culpa in, maiores vel sint fugit, incidunt maxime.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default about;
