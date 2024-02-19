import React from "react";
import Image from "next/image";
import Data1 from "../../../public/assets/home1.jpg";
import Data2 from "../../../public/assets/home2.jpg";

const Homeobj = () => {
  return (
    <div className="text-black mb-10">
      <div className="text-black flex flex-col items-center justify-center ">
        <Image
          src={Data2}
          alt="logo"
          loading="eager"
          className="md:w-[900px] w-[400px] md:h-[600px] h-[500px]"
        />
        <p className=" text-justify md:px-44 px-4 md:text-base text-xs ">
          We are working on Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Quasi eaque aspernatur atque, odit, numquam cupiditate, repellat
          hic adipisci quod iusto magnam recusandae ea corrupti amet molestias
          dolorum exercitationem quae. Alias. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Tempore delectus, reiciendis veniam sunt
          repellat perferendis optio accusamus sequi? Deleniti unde, voluptatum
          id quae ducimus pariatur neque incidunt molestias explicabo nam. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt debitis
          autem tempora nisi, veritatis eos in harum, facere iste quisquam
          illum. Ipsam odit sapiente eius repellendus accusantium, animi a
          minima?
        </p>
      </div>
      <div className="flex flex-col ">
        <h1 className="md:text-xl text-sm font-bold text-left md:px-44 px-4 ">
          Objective:
        </h1>
        <p className=" flex items-center justify-center text-justify md:px-44 px-4 md:text-base text-xs ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
          harum sequi enim dolorum maxime recusandae quasi. A optio neque
          consequatur sunt, non id nobis autem cumque totam, necessitatibus
          eaque ducimus! Est, quae! Ipsa, reprehenderit provident magni fugiat,
          deleniti inventore, totam voluptatibus accusamus laboriosam libero
          eveniet ratione odit hic et natus sunt cupiditate? Rerum, nisi?
        </p>
      </div>
      <div className="text-black flex flex-col items-center justify-center">
        <Image
          src={Data1}
          alt="logo"
          loading="eager"
          className="md:w-[1200px] w-[400px] md:h-[600px] h-[500px]"
        />
        <p className=" flex items-center justify-center text-justify md:px-44 px-4 md:text-base text-xs">
          We are working on Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Quasi eaque aspernatur atque, odit, numquam cupiditate, repellat
          hic adipisci quod iusto magnam recusandae ea corrupti amet molestias
          dolorum exercitationem quae. Alias. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Tempore delectus, reiciendis veniam sunt
          repellat perferendis optio accusamus sequi? Deleniti unde, voluptatum
          id quae ducimus pariatur neque incidunt molestias explicabo nam. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt debitis
          autem tempora nisi, veritatis eos in harum, facere iste quisquam
          illum. Ipsam odit sapiente eius repellendus accusantium, animi a
          minima?
        </p>
      </div>
    </div>
  );
};

export default Homeobj;
