import React, { useEffect, useState } from "react";
import {
  getChainId,
  injected,
  switchChain,
} from "@wagmi/core";
import arrow from "@/public/arrow.png";
import Image from "next/image";
import {
  useAccount,
  useBalance,
  useConnect,
  useSwitchChain,
} from "wagmi";
import { config } from "@/config";
import { useChainId } from "wagmi";
import Alert from "@/components/alert";
import { metaMask } from "@wagmi/connectors";
import { okxNet } from "@/config/chain";
import { mainnet } from "wagmi/chains";
import list from "@/components/list";
import List from "@/components/list";
interface ButtonProps {}
const Button: React.FC<ButtonProps> = (props) => {
  const {} = props;
  const { connect } = useConnect({ config });
  const [message, setMessage] = useState("click me");
  const [show, setShow] = useState(false);
  const [showList, setShowList] = useState(false);
  // const chainId = useChainId();
  // const chainId2 = getChainId(config);note 这两个都拿不到当前账户链
  const account = useAccount();

  const judge = () => {
    for (let item of config.chains) {
      if (item.id == account.chainId) {
        console.log(item.id, "kka");
        setShowList(false);
        setShow(false);
        setMessage("连接成功");
        return true; // 这里的return会直接退出connectNet函数
      }
    }
    setMessage("错误的网络");
    return false;
  };
  useEffect(() => {
    const connectNet = async () => {
      if (!account.chainId) return;
      console.log(account, "kk");
      // config.chains.forEach((item) => {
      //   if (item.id == chainId) return;
      // });
      // setShow(true);

      // await switchChain(config, {
      //   chainId: mainnet.id,
      // });
      // async function switchNet() {
      //   let ethereum = window.ethereum;
      //   const data = [
      //     {
      //       chainId: "0x42",
      //       chainName: "OKXChain Mainnet",
      //       nativeCurrency: {
      //         name: "OKT",
      //         symbol: "OKT",
      //         decimals: 18,
      //       },
      //       rpcUrls: ["https://exchainrpc.okex.org"],
      //     },
      //   ];
      //   /* eslint-disable */
      //   const tx = await ethereum
      //     .request({
      //       method: "wallet_addEthereumChain",
      //       params: data,
      //     })
      //     .catch();
      //   if (tx) {
      //     console.log(tx);
      //   }
      // }

      if (account.isConnected && judge()) {
        console.log("关闭");
        return;
        // config.chains.forEach((item) => {
        //   if (item.id == account.chainId) {
        //     console.log(item.id, "kka");
        //     setShowList(false);
        //     return; note 只会跳第一层
        //   }
        // });
      }
      setMessage("错误的网络");
      setShowList(true);
      // await switchNet();

      setShow(false);
      console.log("hhh");
    };
    connectNet();
  }, [account.chainId, account.isConnected]);

  useEffect(() => {}, [account.isConnected]);
  const result = useBalance({ address: account.address });

  return (
    <div>
      {show && !showList && (
        <Alert onClose={() => setShow(false)}></Alert>
      )}
      {showList && (
        <List onClose={() => setShowList(false)}></List>
      )}
      {/*if(message=="连接成功") return note 不能用if*/}
      {message == "连接成功" ? (
        <button
          onClick={() => setShow(true)}
          className={` px-[3rem] py-[2rem] bg-purple-300 rounded-full
         text-white font-bold text-3xl hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 transition
         ease-in-out  delay-150 duration-300  }`}
        >
          {message}
          -- 账户余额
          {Number(result.data?.formatted).toFixed(2)}
          {result.data?.symbol}
        </button>
      ) : message == "click me" ? (
        <button
          onClick={() => setShow(true)}
          className={` px-[3rem] py-[2rem] bg-purple-300 rounded-full
         text-white font-bold text-3xl hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 transition
         ease-in-out  delay-150 duration-300  }`}
        >
          {message}
        </button>
      ) : (
        <button
          onClick={() => setShowList(true)}
          className={`flex px-[3rem] py-[2rem] bg-red-300 rounded-full
         text-white font-bold text-3xl hover:-translate-y-1 hover:scale-110 hover:bg-red-500 transition
         ease-in-out  delay-150 duration-300  }`}
        >
          {message}
          <Image
            src={arrow}
            alt={"ss"}
            className="rotate-90 ml-3"
          ></Image>
        </button>
      )}
    </div>
  );
};
export default Button;
