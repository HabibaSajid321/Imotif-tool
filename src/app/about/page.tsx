import React from "react";
import Image from "next/image";
import VCimage from "../../../public/assets/vc.jpg";
import Navbar from "@/components/navbar/Navbar";
import EfsDImage from "../../../public/assets/efs4.jpg";
import CasDirector from "../../../public/assets/DrSultan3.jpg";
import Mamimg from "../../../public/assets/mamAmen.jpg";
import HSimg from "../../../public/assets/hassanimg.jpg";
import IMg1 from "../../../public/assets/hassan.jpg";
import img2 from "../../../public/assets/hassanimg2.jpg";
import Footer from "@/components/footer/Footer";

const About = () => {
  return (
    <div>
      <div className="flex flex-col gap-12">
        <Navbar />
        <h1 className="text-gray-600 px-32 pt-7 flex justify-center content-center font-mono font-bold text-2xl">
          Meet Our Officials: Building Strong Collaborations for Success
        </h1>
        <div className="flex px-32 w-full pt-16 ">
          <div className="w-1/3">
            <Image
              className="md:w-[280px] w-[300px] md:h-[270px] h-[300px] rounded-full "
              src={VCimage}
              alt="about"
              loading="eager"
            />
          </div>
          <div className="w-2/3 pt-5">
            <div className="flex flex-col justify-center content-center   ">
              <h1 className="text-[#000000] font-bold md:text-3xl text-xl md:px-[20px] px-4  ">
                Vice Chancellor
              </h1>
              <h1 className="text-black text-base md:px-[20px] px-4 font-medium  text-left">
                University of Agriculture FSD
              </h1>
              <h1 className="text-[#1f7f6d] font-semibold md:text-xl text-lg md:px-[20px] px-4 text-left ">
                Prof. Dr. Rana Iqrar Ahmed Khan
              </h1>
              <h3 className="text-[#565757]  text-base md:px-[20px] px-4 text-left ">
                (Hilal-i-Imtiaz, Sitara-i-Imtiaz)
              </h3>
              <p className="text-black pt-4 pl-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi ducimus sed ab eaque reprehenderit consequuntur, ex
                animi voluptatem quas quae velit illum placeat ipsa similique
                tempore. Eaque consequuntur tenetur earum tempore maxime!
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-32 w-full pt-16 ">
          <div className="w-1/3">
            <Image
              className="md:w-[280px] w-[300px] md:h-[270px] h-[300px] rounded-full "
              src={EfsDImage}
              alt="about"
              loading="eager"
            />
          </div>
          <div className="w-2/3 pt-5">
            <div className="flex flex-col justify-center content-center   ">
              <h1 className="text-[#000000] font-bold md:text-3xl text-xl md:px-[20px] px-4  ">
                Director Endowment Funds Secretariat
              </h1>
              <h1 className="text-black text-base md:px-[20px] px-4 font-medium  text-left">
                University of Agriculture FSD
              </h1>
              <h1 className="text-black text-base md:px-[20px] px-4 font-medium  text-left"></h1>
              <h1 className="text-[#1f7f6d] font-semibold md:text-xl text-lg md:px-[20px] px-4 text-left ">
                Prof. Dr. Ijaz Ahmad Bhatti
              </h1>
              <h3 className="text-[#565757]  text-base md:px-[20px] px-4 text-left ">
                (Executive Director)
              </h3>
              <p className="text-black pt-4 pl-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi ducimus sed ab eaque reprehenderit consequuntur, ex
                animi voluptatem quas quae velit illum placeat ipsa similique
                tempore. Eaque consequuntur tenetur earum tempore maxime!
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-32 w-full pt-16 ">
          <div className="w-1/3">
            <Image
              className="md:w-[280px] w-[300px] md:h-[270px] h-[300px] rounded-full "
              src={CasDirector}
              alt="about"
              loading="eager"
            />
          </div>
          <div className="w-2/3 pt-5">
            <div className="flex flex-col justify-center content-center   ">
              <h1 className="text-[#000000] font-bold md:text-3xl text-xl md:px-[20px] px-4  ">
                Director Center of advance studies
              </h1>
              <h1 className="text-black text-base md:px-[20px] px-4 font-medium  text-left">
                University of Agriculture FSD
              </h1>
              <h1 className="text-[#1f7f6d] font-semibold md:text-xl text-lg md:px-[20px] px-4 text-left ">
                Dr. Sultan Habibullah Khan
              </h1>

              <p className="text-black pt-4 pl-5 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi ducimus sed ab eaque reprehenderit consequuntur, ex
                animi voluptatem quas quae velit illum placeat ipsa similique
                tempore. Eaque consequuntur tenetur earum tempore maxime!
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col content-center justify-center text-black text-4xl font-semibold">
          <h1 className="text-center">Our Project Team</h1>
          <div className="md:pt-4 pt-1 flex content-center justify-center">
            <div className=" md:w-26 w-20 md:h-1 h-[3px]  bg-[#1f7f62]"></div>
          </div>
        </div>

        <div className="flex px-32 w-full pt-8 ">
          <div className="w-1/3">
            <Image
              className="md:w-[280px] w-[300px] md:h-[270px] h-[300px] rounded-full "
              src={Mamimg}
              alt="about"
              loading="eager"
            />
          </div>
          <div className="w-2/3 pt-12">
            <div className="flex flex-col justify-center content-center   ">
              <h1 className="text-[#1f7f6d] font-semibold md:text-xl text-lg md:px-[20px] px-4 text-left ">
                Dr. Amen Shamim
              </h1>
              <h3 className="text-[#565757]  text-base md:px-[20px] px-4 text-left ">
                Assistant Professor
              </h3>
              <p className="text-black pt-4 pl-5 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi ducimus sed ab eaque reprehenderit consequuntur, ex
                animi voluptatem quas quae velit illum placeat ipsa similique
                tempore. Eaque consequuntur tenetur earum tempore maxime!
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-32 w-full pt-16 ">
          <div className="w-1/3">
            <Image
              className="md:w-[280px] w-[300px] md:h-[295px] h-[290px] rounded-full "
              src={img2}
              alt="about"
              loading="eager"
            />
          </div>
          <div className="w-2/3 pt-8">
            <div className="flex flex-col justify-center content-center   ">
              <h1 className="text-[#1f7f6d] font-semibold md:text-xl text-lg md:px-[20px] px-4 text-left ">
                Hassan
              </h1>
              <p className="text-black pt-4 pl-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi ducimus sed ab eaque reprehenderit consequuntur, ex
                animi voluptatem quas quae velit illum placeat ipsa similique
                tempore. Eaque consequuntur tenetur earum tempore maxime!
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
