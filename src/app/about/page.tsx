import React from "react";
import Image from "next/image";
import VCimage from "../../../public/assets/charts/vc1.jpg";

import Navbar from "@/components/navbar/Navbar";
import EfsDImage from "../../../public/assets/efs4.jpg";
import CasDirector from "../../../public/assets/DrSultan3.jpg";
import Mamimg from "../../../public/assets/mamAmen.jpg";
import HSimg from "../../../public/assets/charts/hassanimg2.jpg";
import Footer from "@/components/footer/Footer";

const About = () => {
  return (
    <div>
      <div className="flex flex-col bg-gradient-to-b from-[#CAE4FF] via-green-100 to-blue-100 ">
        <Navbar />

        <div className="pt-10 px-3">
          <h1 className="text-[#404040]  md:text-4xl text-xl text-center font-bold  ">
            Meet Our Officials:
            <span className="inline text-[#1B7341] ">
              {" "}
              Building Strong Collaborations for Success
            </span>
          </h1>
        </div>
        <div className="flex flex-col justify-center content-center items-center w-full md:p-0 p-2">
          <div className="  flex flex-col md:flex-row md:px-32 px-10  p-9  border-2 border-gray-300 m-10 gap-10 rounded-2xl shadow-2xl lg:w-[1180px] w-full  ">
            <div className="w-full md:w-1/3">
              <Image
                className="md:w-[280px] w-[140px] md:h-[270px] h-[120px] md:rounded-full rounded-2xl shadow-3xl"
                src={VCimage}
                alt="about"
                loading="eager"
              />
            </div>

            <div className="w-full md:w-2/3 md:pt-8 pt-0">
              <div className="flex flex-col justify-center content-center">
                <h1 className="text-[#1f7f6d] md:font-semibold font-medium md:text-xl text-sm md:px-[20px] px-4 text-left ">
                  Prof. Dr. Rana Iqrar Ahmed Khan
                  <span className="inline text-[#6e706f] pl-2  text-base">
                    (H.I-S.I)
                  </span>
                </h1>
                <h3 className="text-[#565757]  md:text-base text-xs md:px-[20px] px-4 text-left ">
                  Vice Chancellor
                </h3>
                <p className="text-black pt-4 md:text-sm text-xs md:pl-5 text-justify">
                  Under the leadership of the Vice Chancellor, the University of
                  Agriculture Faisalabad is pioneering research in the field of
                  BioInformatics. Directed by their vision, the university has
                  dedicated resources towards the creation of cutting-edge data
                  tools aimed at investigating the thermal stability of i-motif
                  structures, leveraging high-performance systems for advanced
                  analysis.
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col md:flex-row md:px-32 px-10  p-9  border-2 border-gray-300 m-10 gap-10 rounded-2xl shadow-2xl lg:w-[1180px] w-full   ">
            <div className="md:w-1/3 w-full">
              <Image
                className="md:w-[280px] w-[140px] md:h-[270px] h-[120px] md:rounded-full rounded-2xl shadow-3xl"
                src={EfsDImage}
                alt="about"
                loading="eager"
              />
            </div>
            <div className="md:w-2/3 w-full md:pt-8 pt-0">
              <div className="flex flex-col justify-center content-center   ">
                <h1 className="text-[#1f7f6d] md:font-semibold font-medium md:text-xl text-sm md:px-[20px] px-4 text-left  ">
                  Prof. Dr. Ijaz Ahmad Bhatti
                </h1>
                <h3 className="text-[#565757]  md:text-base text-xs md:px-[20px] px-4 text-left">
                  Executive Director EFS
                </h3>
                <p className="text-black pt-4 md:text-sm text-xs md:pl-5 text-justify">
                  The Director of the Endowment Fund Secretariat and Dean
                  Faculty of Sciences at the University of Agriculture,
                  Faisalabad UAF plays a pivotal role in ensuring the effective
                  utilization of resources towards advancing {"Pakistan's"}{" "}
                  long-term research and development goals in the agriculture
                  and health sector.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:px-32 px-10  p-9  border-2 border-gray-300 m-10 gap-10 rounded-2xl shadow-2xl lg:w-[1180px] w-full  ">
            <div className="md:w-1/3 w-full">
              <Image
                className="md:w-[280px] w-[140px] md:h-[270px] h-[120px] md:rounded-full rounded-2xl shadow-3xl"
                src={CasDirector}
                alt="about"
                loading="eager"
              />
            </div>
            <div className="md:w-2/3 w-full md:pt-8 pt-0">
              <div className="flex flex-col justify-center content-center   ">
                <h1 className="text-[#1f7f6d] md:font-semibold font-medium md:text-xl text-sm md:px-[20px] px-4 text-left  ">
                  Prof. Dr. Sultan Habibullah Khan
                </h1>
                <h3 className="text-[#565757]  md:text-base text-xs md:px-[20px] px-4 text-left">
                  Director CAS-AFS
                </h3>
                <p className="text-black pt-4 md:text-sm text-xs md:pl-5  text-justify  ">
                  The Director CAS-AFS at the University of Agriculture,
                  Faisalabad UAF is a visionary leader dedicated to driving
                  excellence in agricultural education, research, and outreach.
                  With a deep commitment to addressing national and global
                  challenges in food security and sustainable agriculture, the
                  director spearheads efforts to bridge the gap between
                  academia, industry, and government. He is ensuring all the
                  provision of all facilities for this project.
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col content-center justify-center text-black md:text-4xl text-lg font-semibold md:pt-16 pt-10">
            <h1 className="text-center">Our Project Team</h1>
            <div className="md:pt-4 pt-1 flex content-center justify-center">
              <div className=" md:w-32 w-14 md:h-1 h-[2px]  bg-[#1f7f62]"></div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:px-32 px-10  p-9  border-2 border-gray-300 m-10 gap-10 rounded-2xl shadow-2xl lg:w-[1180px] w-full ">
            <div className="md:w-1/3 w-full pt-8">
              <Image
                className="md:w-[280px] w-[140px] md:h-[270px] h-[120px] md:rounded-full rounded-2xl shadow-3xl "
                src={Mamimg}
                alt="about"
                loading="eager"
              />
            </div>
            <div className="md:w-2/3 w-full ">
              <div className="flex flex-col justify-center content-center md:pt-10 pt-0  ">
                <h1 className="text-[#1f7f6d] md:font-semibold font-medium md:text-xl text-sm md:px-[20px] px-4 text-left  ">
                  Dr. Amen Shamim
                </h1>
                <h3 className="text-[#565757]  md:text-base text-xs md:px-[20px] px-4 text-left ">
                  Assistant Professor
                </h3>
                <p className="text-black pt-4 md:text-base text-xs md:pl-5  text-justify ">
                  Dr. Amen Shamim, Principal Investigator of this project,
                  specialized as a bioinformatician with a profound interest in
                  data analysis. Her research centers on leveraging
                  computational tools and big data analysis to tackle intricate
                  health issues at the convergence of human, animal, and
                  environmental health.This project is made possible through the
                  support of the Endowment Funds Secretariat and in
                  collaboration with Prof. Kyeong Kyu {"Kim’s"} Lab. As part of
                  this initiative, a commercialization facility has been
                  established to support researchers for investigating the
                  thermal stability of non-canonical structures.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:px-32 px-10  p-9  border-2 border-gray-300 m-10 gap-10 rounded-2xl shadow-2xl lg:w-[1180px] w-full ">
            <div className="md:w-1/3 w-full">
              <Image
                className="md:w-[280px] w-[140px] md:h-[270px] h-[120px] md:rounded-full rounded-2xl shadow-3xl"
                src={HSimg}
                alt="about"
                loading="eager"
              />
            </div>
            <div className="md:w-2/3 w-full md:pt-8 pt-0">
              <div className="flex flex-col justify-center content-center   ">
                <h1 className="text-[#1f7f6d] md:font-semibold font-medium md:text-xl text-sm md:px-[20px] px-4 text-left  ">
                  Muhammad Hassan
                </h1>
                <h3 className="text-[#565757]  md:text-base text-xs md:px-[20px] px-4 text-left ">
                  Researcher
                </h3>
                <p className="text-black pt-4 md:text-sm text-xs text-justify  ">
                  Mr. Muhammad Hassan Butt, a distinguished fellow researcher
                  within this project, possesses expertise in the fields of
                  structural bioinformatics and bioinformatics data analysis.
                  His research endeavors focus on intricate areas such as
                  Docking, Molecular Dynamics (MD) simulation, and subsequent
                  post-MD data analysis. Furthermore, he actively engages in
                  training machine learning models utilizing MD data to address
                  pivotal health-related challenges, both within the human
                  domain and in agricultural contexts.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className="pt-8">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
