import React, { useEffect } from "react";
import { config } from "@/config";
import Image from "next/image";
import { useConnect, useSwitchChain } from "wagmi";

interface ListProps {
  onClose: () => void;
}
const List: React.FC<ListProps> = (props) => {
  const { onClose } = props;
  const { connect } = useConnect({ config });
  const { chains, switchChain } = useSwitchChain();

  useEffect(() => {}, []);
  const handleClick = (id: any) => {
    try {
      switchChain({ chainId: id });
      console.log(id);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="inset-0 z-20 w-screen h-screen fixed bg-opacity-20 bg-black flex justify-center items-center text-white">
      <div
        onClick={() => onClose()}
        className="absolute right-[1.5rem] top-[2rem] text-3xl text-gray-300 font-bold  size-[5rem] bg-gray-800 cursor-pointer rounded-full text-center leading-[5rem] "
      >
        x
      </div>
      <div className="w-1/4 h-2/3 bg-white rounded-2xl text-black flex flex-col    pl-8 pt-10">
        <div className="text-3xl font-black mb-4">
          切换网络
        </div>
        <div className="text-gray-500">
          检测到错误的网络，请切换或断开连接以继续。
        </div>
        <div>
          {config.chains.map((item, index) => {
            return (
              <div
                key={item.id}
                className="text-black text-1xl font-bold flex items-center my-10 cursor-pointer"
                onClick={() => handleClick(item.id)}
              >
                <Image
                  src={
                    "https://img.icons8.com/?size=100&id=1rW2SYVBOeih&format=png"
                  }
                  alt={"xx"}
                  width={40}
                  height={40}
                  className="mr-2"
                ></Image>
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default List;
