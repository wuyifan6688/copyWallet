import React, { useEffect, useState } from "react";
import {
  getChainId,
  injected,
  switchChain,
} from "@wagmi/core";
import {
  useAccount,
  useConnect,
  useSwitchChain,
} from "wagmi";
import { config } from "@/config";
import { useChainId } from "wagmi";
import Alert from "@/components/alert";
import { metaMask } from "@wagmi/connectors";
import { okxNet } from "@/config/chain";
import { mainnet } from "wagmi/chains";
interface ButtonProps {}
const Button: React.FC<ButtonProps> = (props) => {
  const {} = props;
  const { connect } = useConnect({ config });
  const [show, setShow] = useState(false);
  // const chainId = useChainId();
  // const chainId2 = getChainId(config);note 这两个都拿不到当前账户链
  const account = useAccount();
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
      async function switchNet() {
        let ethereum = window.ethereum;
        const data = [
          {
            chainId: "0x42",
            chainName: "OKXChain Mainnet",
            nativeCurrency: {
              name: "OKT",
              symbol: "OKT",
              decimals: 18,
            },
            rpcUrls: ["https://exchainrpc.okex.org"],
          },
        ];
        /* eslint-disable */
        const tx = await ethereum
          .request({
            method: "wallet_addEthereumChain",
            params: data,
          })
          .catch();
        if (tx) {
          console.log(tx);
        }
      }
      if (account.isConnected) await switchNet();
      console.log("hhh");
    };
    connectNet();
  }, [account.chainId, account.isConnected]);

  return (
    <div>
      {show && (
        <Alert onClose={() => setShow(false)}></Alert>
      )}
      <button
        onClick={() => setShow(true)}
        className=" px-[3rem] py-[2rem] bg-purple-300 rounded-full
         text-white font-bold text-3xl hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 transition
         ease-in-out  delay-150 duration-300"
      >
        click me
      </button>
    </div>
  );
};
export default Button;
