"use client";
import Navbar from "@/components/navbar/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import { useForm, ValidationError } from "@formspree/react";
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
  { sequence: "CCCCTTTCCCCTTTCCCCTTTCCCC", image: "/assets/azCharts/C4T3.png" },
];

const Analyze = () => {
  const [sequence, setSequence] = useState("");
  const [displayedImage, setDisplayedImage] = useState<string | null>(null);
  const [state, formSubmit] = useForm("mqkrqjnb");
  if (state.succeeded) {
    return (
      <p className="text-black flex content-center justify-center pt-8 ">
        Your Sequence has been submitted!
      </p>
    );
  }

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
    <div className="bg-gradient-to-b from-[#CAE4FF] via-green-100 to-blue-100">
      <div className="sbg-gradient-to-b from-[#CAE4FF] via-green-100 to-blue-100">
        <Navbar />
        <div className="bg-gradient-to-b from-[#CAE4FF] via-green-100 to-blue-100">
          <div className="flex justify-center content-center text-[#030303] bg-gradient-to-b from-[#CAE4FF] font-semibold md:text-5xl text-3xl md:h-36 h-28 text-center pt-9 ">
            Sequence Analyzer
          </div>
          <div className=" pt-8">
            <div className="flex flex-col md:m-9 m-5 gap-5">
              <form
                action="https://formspree.io/f/mqkrqjnb"
                method="POST"
                onSubmit={formSubmit}
              >
                <div className="mb-6 flex md:flex-row flex-col md:gap-8 w-full justify-left content-between text-black md:px-8 px-2 bg-gray-200 md:p-3 p-2 rounded-md border border-gray-500 ">
                  <label
                    htmlFor="Name"
                    className="block text-black  mb-2 font-semibold md:text-xl text-sm "
                  >
                    <h1 className="pt-2  ">Your Name</h1>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="shadow appearance-none border px-12 md:py-0 py-1  text-black  leading-tight 
                  focus:outline-none focus:shadow-outline rounded-md"
                    placeholder="Enter your name"
                  />
                  <label
                    htmlFor="email"
                    className="block text-black  mb-2 font-semibold md:text-xl text-sm  mb-email "
                  >
                    <h1 className="pt-2">Email Address</h1>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className=" rounded-md shadow appearance-none border md:py-0 py-1  px-12 text-black   leading-tight 
                        focus:outline-none focus:shadow-outline"
                    placeholder="Your email address"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm italic"
                  />
                </div>
                <div className="flex flex-col w-full text-black md:px-8 px-2 bg-gray-200 p-3 rounded-md border border-gray-500 gap-4">
  <div className="w-full font-semibold md:text-xl text-sm">
    <label>C-Range:</label>
    <select name="C-Range" id="c-range" className="rounded-md w-full">
      {Array.from(Array(4).keys()).map((index) => (
        <option key={index + 1} value={index + 1}>
          {index + 1}
        </option>
      ))}
    </select>
  </div>
  <div className="w-full font-semibold md:text-xl text-sm">
    <label>Loop Size:</label>
    <select name="Loop Size" id="loop-size" className="rounded-md w-full">
      {Array.from(Array(10).keys()).map((index) => (
        <option key={index + 1} value={index + 1}>
          {index + 1}
        </option>
      ))}
    </select>
  </div>
  <div className="w-full font-semibold md:text-xl text-sm">
    <label>Temp:</label>
    <select name="Temp" id="temp" className="rounded-md w-full">
      <option value="temp280k">280k</option>
      <option value="temp300k">300k</option>
      <option value="temp320k">320k</option>
      <option value="temp340k">340k</option>
      <option value="temp360k">360k</option>
    </select>
  </div>
</div>
                <div className="mb-6 ">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2 pt-2"
                  >
                    Enter your Sequence here.
                  </label>
                  <textarea
                    id="message"
                    name="Sequence"
                    className=" rounded-md shadow appearance-none border  w-full py-2 px-3 text-black leading-tight bg-gray-200  border-gray-500
"
                    placeholder="Example CCCTTTCCCTTTCCCTTT "
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm italic"
                  />
                </div>

                <div className="pt-0">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="flex items-center justify-center md:font-semibold font-normal text-gray-100 
                   bg-gradient-to-r from-gray-500 via-green-700 to-cyan-600 md:w-40 w-32 md:px-2 px-1 py-1 
                    rounded-md hover:from-gray-300 hover:via-green-400 hover:to-cyan-500 hover:text-black 
                     transition-all duration-300 mb-12"
                  >
                    {state.submitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
              <div>
                <h1 className="text-[#b83f3f] font-semibold">
                  free till trail version ends
                </h1>
                <div className=" rounded-md shadow appearance-none border  w-full py-2 px-3 text-black leading-tight bg-gray-200  border-gray-500">
                  <input
                    type="text"
                    placeholder="    Example CCCTTTCCCTTTCCCTTT "
                    className="font-xl w-full whitespace-normal h-10 rounded-lg"
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
                   bg-gradient-to-r from-gray-500 via-green-700 to-cyan-600 md:w-40 w-32 md:px-2 px-1 py-1 
                   rounded-md hover:from-gray-300 hover:via-green-400 hover:to-cyan-500 hover:text-black 
                  transition-all duration-300"
                  >
                    Submit Query
                  </button>
                </form>
              </div>
              {displayedImage && (
                <div className="md:pt-6 pt-2 px-10 flex justify-center content-center flex-wrap ">
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
            <div className="">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyze;
