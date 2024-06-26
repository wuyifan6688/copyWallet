"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import metaMaskImage from "@/public/metaMask.png";
import unisatImg from "@/public/unisat.png";
import {
  useAccount,
  useConnect,
  useSwitchChain,
} from "wagmi";
import { config } from "@/config";
import { injected } from "@wagmi/core";
import { metaMask } from "wagmi/connectors";
interface AlertProps {
  onClose: () => void;
  onIn: () => void;
  onBalance: any;
}
const Alert: React.FC<AlertProps> = (props) => {
  const { onClose, onIn, onBalance } = props;
  const { chains, switchChain } = useSwitchChain();
  const account = useAccount();
  const handleUnisat = async () => {
    try {
      let accounts = await (
        window as any
      ).unisat.requestAccounts();
      onClose();
      onIn();

      let res = await (window as any).unisat.getBalance();
      // let res1 = await (window as any).unisat.getNetwork();
      // let res2 = await (window as any).unisat.switchNetwork(
      //   1,
      // );
      onBalance(res.total);
      // console.log(res.total, res1, res2);
    } catch (e) {
      console.log("connect failed", e);
    }
  };
  useEffect(() => {}, []);
  const { connect } = useConnect({ config });
  return (
    <div className="inset-0 z-20 w-screen h-screen fixed bg-opacity-20 bg-black flex justify-center items-center text-white">
      <div className="w-2/3 h-2/3 bg-black rounded-2xl p-10 relative">
        <div
          onClick={() => onClose()}
          className="absolute right-[1.5rem] top-[2rem] text-3xl text-gray-300 font-bold  size-[5rem] bg-gray-800 cursor-pointer rounded-full text-center leading-[5rem] "
        >
          x
        </div>
        <p className="text-2xl font-bold ">连接钱包</p>
        <div className="mt-10">
          <div className="mb-7">已安装</div>
          <div>
            <section className="flex   flex-col">
              <div
                className="flex items-center cursor-pointer"
                onClick={() =>
                  connect({ connector: metaMask() })
                }
              >
                <Image
                  src={metaMaskImage}
                  alt={"HH"}
                  className="size-20 mr-2"
                ></Image>
                <div className="ml-3 my-10">
                  <div className="font-black text-3xl">
                    MetaMask
                  </div>
                  <div>近期</div>
                </div>
              </div>{" "}
              <div
                className="flex items-center cursor-pointer"
                onClick={() => handleUnisat()}
              >
                <Image
                  src={unisatImg}
                  alt={"HH"}
                  className="size-20 mr-2"
                ></Image>
                <div className="ml-3 my-10">
                  <div className="font-black text-3xl">
                    UniSat
                  </div>
                  <div>近期</div>
                </div>
              </div>
            </section>
            <section></section>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Alert;
