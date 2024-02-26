"use client";
import Navbar from "@/components/navbar/Navbar";
import { ChartData } from "@/utils/chartData";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Page = () => {
  const [data, setData] = useState<any>(null);
  const router = useRouter();
  const { id } = useParams();
  const newId = Number(id);

  useEffect(() => {
    console.log("Current ID:", newId);
    const findData: any = ChartData.find((data) => data.id === newId);
    console.log("Found Data:", findData);
    setData(findData);
  }, [id]);

  return (
    <>
      <Navbar />
      {data && (
        <div className="text-center pt-10">
          <p className="text-black font-bold md:text-2xl text-lg">
            {data.title}
          </p>
          {data.ChartImage && (
            <div className="mt-4 flex justify-center content-center">
              <Image
                src={data.ChartImage}
                alt="Chart Image"
                width={1200}
                height={800}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Page;
