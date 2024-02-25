import React from "react";
import Image from "next/image";
import VCimage from "../../../public/assets/vc.jpg";
import Navbar from "@/components/navbar/Navbar";
import EfsDImage from "../../../public/assets/efs4.jpg";
import CasDirector from "../../../public/assets/DrSultan3.jpg";
import Mamimg from "../../../public/assets/mamAmen.jpg";
import HSimg from "../../../public/assets/hassanimg3.jpg";
import Footer from "@/components/footer/Footer";

const About = () => {
  return (
    <div>
      <div className="flex flex-col  ">
        <Navbar />
        <h1 className="text-gray-600 md:px-32 px-10 md:pt-10 pt-4 flex justify-center content-center font-mono font-bold md:text-2xl text-lg ">
          Meet Our Officials: Building Strong Collaborations for Success
        </h1>
        <div className="flex md:px-32 px-10 w-full md:pt-24 pt-10 ">
          <div className="w-1/3">
            <Image
              className="md:w-[280px] w-[140px] md:h-[270px] h-[120px] md:rounded-full rounded-2xl "
              src={VCimage}
              alt="about"
              loading="eager"
            />
          </div>

          <div className="w-2/3 pt-5">
            <div className="flex flex-col justify-center content-center   ">
              <h1 className="text-[#000000] font-bold md:text-3xl text-base md:px-[20px] px-4  ">
                Vice Chancellor
              </h1>
              <h1 className="text-black md:text-base text-xs md:px-[20px] px-4 font-medium  text-left">
                University of Agriculture FSD
              </h1>
              <h1 className="text-[#1f7f6d] md:font-semibold font-medium md:text-xl text-sm md:px-[20px] px-4 text-left ">
                Prof. Dr. Rana Iqrar Ahmed Khan
              </h1>
              <h3 className="text-[#565757]  md:text-base text-xs md:px-[20px] px-4 text-left ">
                (Hilal-i-Imtiaz, Sitara-i-Imtiaz)
              </h3>
              <p className="text-black pt-4 md:text-base text-xs md:pl-5 hidden md:block ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi ducimus sed ab eaque reprehenderit consequuntur, ex
                animi voluptatem quas quae velit illum placeat ipsa similique
                tempore. Eaque consequuntur tenetur earum tempore maxime!
              </p>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <p className="text-black pt-4  w-full text-sm px-12 md:hidden block ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            ducimus sed ab eaque reprehenderit consequuntur, ex animi voluptatem
            quas quae velit illum placeat ipsa similique tempore. Eaque
            consequuntur tenetur earum tempore maxime!
          </p>
        </div>
        <div className="flex md:px-32 px-10 w-full md:pt-24 pt-10  ">
          <div className="w-1/3">
            <Image
              className="md:w-[280px] w-[140px] md:h-[270px] h-[120px] md:rounded-full rounded-2xl"
              src={EfsDImage}
              alt="about"
              loading="eager"
            />
          </div>
          <div className="w-2/3 md:pt-5 pt-2">
            <div className="flex flex-col justify-center content-center   ">
              <h1 className="text-[#000000] font-bold md:text-3xl text-base md:px-[20px] px-4   ">
                Director Endowment Funds Secretariat
              </h1>
              <h1 className="text-black md:text-base text-xs md:px-[20px] px-4 font-medium  text-left">
                University of Agriculture FSD
              </h1>
              <h1 className="text-[#1f7f6d] md:font-semibold font-medium md:text-xl text-sm md:px-[20px] px-4 text-left  ">
                Prof. Dr. Ijaz Ahmad Bhatti
              </h1>
              <h3 className="text-[#565757]  md:text-base text-xs md:px-[20px] px-4 text-left">
                (Executive Director)
              </h3>
              <p className="text-black pt-4 md:text-base text-xs md:pl-5 hidden md:block ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi ducimus sed ab eaque reprehenderit consequuntur, ex
                animi voluptatem quas quae velit illum placeat ipsa similique
                tempore. Eaque consequuntur tenetur earum tempore maxime!
              </p>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <p className="text-black pt-4  w-full text-sm px-12 md:hidden block ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            ducimus sed ab eaque reprehenderit consequuntur, ex animi voluptatem
            quas quae velit illum placeat ipsa similique tempore. Eaque
            consequuntur tenetur earum tempore maxime!
          </p>
        </div>
        <div className="flex md:px-32 px-10 w-full md:pt-24 pt-10 ">
          <div className="w-1/3">
            <Image
              className="md:w-[280px] w-[140px] md:h-[270px] h-[120px] md:rounded-full rounded-2xl"
              src={CasDirector}
              alt="about"
              loading="eager"
            />
          </div>
          <div className="w-2/3 md:pt-5 pt-2">
            <div className="flex flex-col justify-center content-center   ">
              <h1 className=" text-[#000000] font-bold md:text-3xl text-base md:px-[20px] px-4 ">
                Director Center of advance studies
              </h1>
              <h1 className="text-black md:text-base text-xs md:px-[20px] px-4 font-medium  text-left">
                University of Agriculture FSD
              </h1>
              <h1 className="text-[#1f7f6d] md:font-semibold font-medium md:text-xl text-sm md:px-[20px] px-4 text-left  ">
                Dr. Sultan Habibullah Khan
              </h1>

              <p className="text-black pt-4 md:text-base text-xs md:pl-5 hidden md:block  ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi ducimus sed ab eaque reprehenderit consequuntur, ex
                animi voluptatem quas quae velit illum placeat ipsa similique
                tempore. Eaque consequuntur tenetur earum tempore maxime!
              </p>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <p className="text-black pt-4  w-full text-sm px-12 md:hidden block ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            ducimus sed ab eaque reprehenderit consequuntur, ex animi voluptatem
            quas quae velit illum placeat ipsa similique tempore. Eaque
            consequuntur tenetur earum tempore maxime!
          </p>
        </div>
        <div className=" flex flex-col content-center justify-center text-black md:text-4xl text-lg font-semibold md:pt-16 pt-10">
          <h1 className="text-center">Our Project Team</h1>
          <div className="md:pt-4 pt-1 flex content-center justify-center">
            <div className=" md:w-32 w-14 md:h-1 h-[2px]  bg-[#1f7f62]"></div>
          </div>
        </div>

        <div className="flex md:px-32 px-10 w-full md:pt-24 pt-10 ">
          <div className="w-1/3">
            <Image
              className="md:w-[280px] w-[140px] md:h-[270px] h-[120px] md:rounded-full rounded-2xl "
              src={Mamimg}
              alt="about"
              loading="eager"
            />
          </div>
          <div className="w-2/3 pt-12">
            <div className="flex flex-col justify-center content-center   ">
              <h1 className="text-[#1f7f6d] md:font-semibold font-medium md:text-xl text-sm md:px-[20px] px-4 text-left  ">
                Dr. Amen Shamim
              </h1>
              <h3 className="text-[#565757]  md:text-base text-xs md:px-[20px] px-4 text-left ">
                Assistant Professor
              </h3>
              <p className="text-black pt-4 md:text-base text-xs md:pl-5 hidden md:block   ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi ducimus sed ab eaque reprehenderit consequuntur, ex
                animi voluptatem quas quae velit illum placeat ipsa similique
                tempore. Eaque consequuntur tenetur earum tempore maxime!
              </p>
            </div>
          </div>
        </div>

        <div>
          {" "}
          <p className="text-black pt-4  w-full text-sm px-12 md:hidden block ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            ducimus sed ab eaque reprehenderit consequuntur, ex animi voluptatem
            quas quae velit illum placeat ipsa similique tempore. Eaque
            consequuntur tenetur earum tempore maxime!
          </p>
        </div>

        <div className="flex md:px-32 px-10 w-full md:pt-24 pt-10 ">
          <div className="w-1/3">
            <Image
              className="md:w-[280px] w-[140px] md:h-[270px] h-[120px] md:rounded-full rounded-2xl "
              src={HSimg}
              alt="about"
              loading="eager"
            />
          </div>
          <div className="w-2/3 pt-12">
            <div className="flex flex-col justify-center content-center   ">
              <h1 className="text-[#1f7f6d] md:font-semibold font-medium md:text-xl text-sm md:px-[20px] px-4 text-left  ">
                Muhammad Hassan
              </h1>
              <h3 className="text-[#565757]  md:text-base text-xs md:px-[20px] px-4 text-left ">
                Researcher
              </h3>
              <p className="text-black pt-4 md:text-base text-xs md:pl-5 hidden md:block   ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi ducimus sed ab eaque reprehenderit consequuntur, ex
                animi voluptatem quas quae velit illum placeat ipsa similique
                tempore. Eaque consequuntur tenetur earum tempore maxime!
              </p>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <p className="text-black pt-4  w-full text-sm px-12 md:hidden block ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            ducimus sed ab eaque reprehenderit consequuntur, ex animi voluptatem
            quas quae velit illum placeat ipsa similique tempore. Eaque
            consequuntur tenetur earum tempore maxime!
          </p>
        </div>
        <div className="pt-8">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
