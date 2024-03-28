import { createConfig, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { okxNet } from "@/config/chain";

export const config = createConfig({
  chains: [mainnet, sepolia, okxNet],

  transports: {
    [mainnet.id]: http("https://eth.llamarpc.com"),
    [sepolia.id]: http("https://rpc-sepolia.rockx.com"), //note 用来usebalance查余额的
    [okxNet.id]: http("https://exchainrpc.okex.org"),
  },
});
