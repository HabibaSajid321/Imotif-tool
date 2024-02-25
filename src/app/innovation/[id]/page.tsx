"use client";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { id } = useParams();
  const newId = Number(id);

  console.log(id);
  return (
    <div className="text-black">
      Lorem ipsum dolor sit.
      {newId}
    </div>
  );
};

export default page;
