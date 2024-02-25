"use client";
import { useRouter } from "next/router";
import React from "react";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  const newId = Number(id);

  console.log(id);
  return (
    <div className="text-black">
      Lorem ipsum dolor sit.
      {newId}
    </div>
  );
};

export default Page;
