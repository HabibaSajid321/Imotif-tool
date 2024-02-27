"use client";
import Navbar from "@/components/navbar/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
const sequences = [
  { sequence: "CCCCTCCCCTCCCCTCCCC", image: "/assets/azCharts/C4T1.png" },
  { sequence: "CCCCTTCCCCTTCCCCTTCCCC", image: "/assets/azCharts/C4T2.png" },
  {
    sequence: "CCCCTTTTCCCCTTTTCCCCTTTTCCCC",
    image: "/assets/azCharts/C4T4.png",
  },
  {
    sequence: "CCCCTTTTTCCCCTTTTTCCCCTTTTTCCCC",
    image: "/assets/azCharts/C4T5.png",
  },
  {
    sequence: "CCCCTTTTTTCCCCTTTTTTCCCCTTTTTTCCCC",
    image: "/assets/azCharts/C4T6.png",
  },
  {
    sequence: "CCCCTTTTTTTCCCCTTTTTTTCCCCTTTTTTTCCCC  ",
    image: "/assets/azCharts/C4T7.png",
  },
  {
    sequence: "CCCCTTTTTTTTCCCCTTTTTTTTCCCCTTTTTTTTCCCC  ",
    image: "/assets/azCharts/C4T8.png",
  },
  {
    sequence: "CCCCTTTTTTTTTCCCCTTTTTTTTTCCCCTTTTTTTTTCCCC  ",
    image: "/assets/azCharts/C4T9.png",
  },
  {
    sequence: "CCCCTTTTTTTTTTCCCCTTTTTTTTTTCCCCTTTTTTTTTTCCCC",
    image: "/assets/azCharts/C4T10.png",
  },
];

const Analyze = () => {
  const [sequence, setSequence] = useState("");
  const [displayedImage, setDisplayedImage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const matchedSequence = sequences.find(
      (item) => item.sequence === sequence
    );
    if (matchedSequence) {
      setDisplayedImage(matchedSequence.image);
    } else {
      alert("Sequence not found.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white pt-8">
        <div className="flex flex-col md:m-9 m-5 gap-8">
          <div className="flex w-full justify-between text-black md:px-8 px-2 bg-gray-200 p-3 rounded-md border border-gray-500">
            <div className="w-1/3 font-semibold md:text-xl text-sm ">
              <label>C-Range:</label>
              <select name="C-Range" id="c-range">
                {Array.from(Array(30).keys()).map((index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/3 font-semibold md:text-xl text-sm ">
              <label>Loop Size:</label>
              <select name="C-Range" id="c-range">
                {Array.from(Array(30).keys()).map((index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/3 font-semibold md:text-xl text-sm ">
              <label>Temp:</label>
              <select name="C-Range" id="c-range">
                <option value="temp280k">280k</option>
                <option value="temp300k">300k</option>
                <option value="temp300k">320k</option>
                <option value="temp300k">340k</option>
                <option value="temp300k">360k</option>
              </select>
            </div>
          </div>
          <div>
            <h1 className="text-[#b83f3f] font-semibold">
              free till trail version ends
            </h1>
            <div className=" bg-gray-200 p-3 rounded-md border h-32 text-black  border-gray-500 ">
              <input
                type="text"
                placeholder="Example CCC TTT CCC TTT CCC TTT "
                className="font-xl w-full whitespace-normal h-10 "
                value={sequence}
                onChange={(e) => setSequence(e.target.value)}
              />
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <button
                type="submit"
                className="flex items-center justify-center md:font-semibold font-normal text-gray-100 
    bg-gradient-to-r from-gray-600 via-green-700 to-cyan-900 md:w-40 w-32 md:px-2 px-1 py-1 
    rounded-md hover:from-gray-300 hover:via-green-400 hover:to-cyan-500 hover:text-black 
    transition-all duration-300"
              >
                Submit Query
              </button>
            </form>
          </div>
          {displayedImage && (
            <div className="md:pt-6 pt-2 px-10 flex justify-center content-center">
              <Image
                width={900}
                height={800}
                src={displayedImage}
                alt="Displayed"
                // className="md:w-[600px] w-[220px] md:h-[500px] h-[300px]"
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Analyze;
