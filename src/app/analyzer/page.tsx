"use client";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const analyze = () => {
  return (
    <div className="">
      <Navbar />
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
        <div className="px-8 bg-gray-200 p-3 rounded-md border h-32 text-black  border-gray-500 ]">
          <input
            type="text"
            placeholder="Example CCC TTT CCC TTT CCC TTT CCC TTT CCC TTT CCC TTT CCC TTT CCC TTT CCC TTT CCC TTT CCC"
            className="font-xl px-44"
          />
        </div>
        <div>
          <button className="flex items-center justify-center md:font-semibold font-normal text-gray-100 bg-gradient-to-r from-gray-600 via-green-700 to-cyan-900 md:w-40 w-32 md:px-2 px-1 py-1 rounded-md hover:from-gray-300 hover:via-green-400 hover:to-cyan-500 hover:text-black">
            Submit Query
          </button>
        </div>
      </div>
    </div>
  );
};

export default analyze;
