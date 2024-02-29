"use client";
import React, { FC, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import C3280k from "../../../public/assets/C3-280KAsset3.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChartData } from "@/utils/chartData";
import Footer from "@/components/footer/Footer";

const Innovation: FC = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState<any>(ChartData);

  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center content-center text-[#030303] font-semibold md:text-5xl text-3xl md:h-36 h-28 text-center pt-9 bg-gray-200">
        Innovation
      </div>
      <div className="text-gray-600 text-center pt-8 md:text-2xl text-lg md:font-bold font-semibold ">
        <h1>Temperature dependent RMSD plots of IMOTIF Structures </h1>
      </div>
      <div className="flex justify-center content-center  items-center ">
        <div className="flex items-center justify-center gap-5 flex-wrap md:py-10 py-14 md:px-28 px-10 content-center ">
          {blogs.map((val: any, i: number) => (
            <div
              key={i}
              onClick={() => router.push(`/innovation/${val.id}`)}
              className="md:w-[310px] md:h-64 h-64  cursor-pointer  shadow-lg border border-gray-300 hover:border-[2px] rounded-[4px] flex flex-col transition-all duration-300 "
            >
              <div className=" flex justify-center items-center p-5">
                <Image
                  src={val.blogSrc}
                  alt="blog_image"
                  width={300}
                  height={300}
                  loading="eager"
                />
              </div>
              <div className="px-6">
                <div className="bg-gray-200 md:h-20 h-16 w-full rounded-lg">
                  <p className="capitalize text-black md:text-lg text-center font-semibold px-2">
                    {val.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Innovation;
