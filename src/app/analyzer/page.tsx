"use client";
import Navbar from "@/components/navbar/Navbar";
import React, { useState } from "react";
// import Navbar from "@/components/navbar/Navbar";

// Define the sequence images
const sequences = [
  { sequence: "CCC TTT CCC TTT CCC", image: "/assets/data1.png" },
  { sequence: "CCC TTT TTT CCC", image: "/assets/data2.png" },
  // Add more objects as needed
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
                <option value="temp300k">300kl</option>
                <option value="temp300k">320kl</option>
                <option value="temp300k">340kl</option>
                <option value="temp300k">360kl</option>
              </select>
            </div>
          </div>
          <div className="px-8 bg-gray-200 p-3 rounded-md border h-32 text-black  border-gray-500 ">
            <input
              type="text"
              placeholder="Example CCC TTT CCC TTT CCC TTT CCC TTT CCC TTT CCC TTT CCC TTT CCC TTT CCC TTT CCC TTT CCC"
              className="font-xl "
              value={sequence}
              onChange={(e) => setSequence(e.target.value)}
            />
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
            <div className="mt-8 px-10 ">
              <img
                src={displayedImage}
                alt="Displayed"
                className="md:w-[500px] w-[220px] md:h-[500px] h-[300px]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analyze;
