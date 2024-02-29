import React from "react";
import Image from "next/image";
import homeimg1 from "../../../public/assets/home2.jpg";
import homeimge2 from "../../../public/assets/home1.jpg";
const Homeobj = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-yellow-50 via-green-50 to-blue-50 ">
      <div className="flex flex-col items-center justify-center md:gap-5 pt-8 ">
        <div>
          <h1 className="text-[#404040]  md:text-5xl text-xl text-center font-bold ">
            Data Analytics
            <span className="inline text-[#1B7341]"> is our future</span>
          </h1>
        </div>

        <p className="text-[#404040]  md:text-2xl text-[15px] md:font-medium  text-center">
          A Web Portal For Identification Of Thermal Stability Of Non-Canonical
          Structures
        </p>
      </div>
      <div className=" flex flex-row border-2 border-yellow-200 m-10 gap-10 rounded-2xl shadow-2xl">
        <div className="w-1/2">
          <Image
            src={homeimg1}
            alt="Home image"
            width={550}
            height={600}
            className="rounded-2xl"
          />
        </div>
        <div className="w-1/2 rounded-lg px-4 text-black pt-6">
          <p className=" flex justify-start content-center  pt-4 font-bold px-2">
            Introducing MD-TSPM: A Computational Platform Utilizing Molecular
            Dynamics Simulation for Prediction Thermal Stability of Noncanonical
            Structures.
          </p>
          <ul className="list-disc pl-6 pt-3">
            <li>
              Thermal stability of i-motifs can be estimated by plotting in
              silico molecular dynamics simulation temperature against
              experimental temperature.
            </li>
            <li>
              Similar to determining melting temperature (Tm) values through CD
              experiments, this method relies on the assumption of correlation
              between temperature and conformational flexibility.
            </li>
            <li>
              The correlation coefficient between temperature and conformational
              flexibility is represented by Root Mean Square Deviation (RMSD)
              in MD simulation.
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex flex-row border-2 border-yellow-200 m-10 gap-10 rounded-2xl shadow-2xl  ">
        <div className="w-1/2">
          <Image
            src={homeimge2}
            alt="Home image"
            width={550}
            height={1500}
            className="rounded-2xl"
          />
        </div>
        <div className="w-1/2 rounded-lg px-4 text-black pt-6">
          <h1 className="text-black font-semibold">
            Unveiling the Secrets of DNA: Exploring I-Motif Structural Dynamics
            for Enhanced Biological Insights and Therapeutic Potential.
          </h1>
          <p className="text-black justify-center">
            The tool focuses on analyzing I-motif DNA structures, vital for gene
            regulation and genomic stability. It aims to explore how loop length
            variations affect their thermal stability. This research is crucial
            for advancing our understanding of the non-canonical structures of
            DNA, with potential implications in biological research and
            therapeutics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homeobj;
