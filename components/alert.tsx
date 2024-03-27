"use client";
import React from "react";
import Image from "next/image";
import metaMaskImage from "@/public/metaMask.png";
interface AlertProps {}
const Alert: React.FC<AlertProps> = (props) => {
  const {} = props;

  return (
    <div className="inset-0 w-screen h-screen fixed bg-opacity-20 bg-black flex justify-center items-center text-white">
      <div className="w-2/3 h-2/3 bg-black rounded-2xl p-10 relative">
        <div className="absolute right-[1.5rem] top-[2rem] text-3xl text-gray-300 font-bold  size-[5rem] bg-gray-800 cursor-pointer rounded-full text-center leading-[5rem] ">
          x
        </div>
        <p className="text-2xl font-bold ">连接钱包</p>
        <div className="mt-10">
          <div className="mb-7">已安装</div>
          <div className="flex cursor-pointer">
            {/*<Image*/}
            {/*  src={metaMaskImage}*/}
            {/*  alt={"HH"}*/}
            {/*  className="w-15 h-15"*/}
            {/*></Image>*/}
            <div className="ml-3">
              <div className="font-black text-3xl">
                MetaMask
              </div>
              <div>近期</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Alert;
