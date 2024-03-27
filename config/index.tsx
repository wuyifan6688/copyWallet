import { createConfig, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { okxNet } from "@/config/chain";

export const config = createConfig({
  chains: [mainnet, sepolia],

  transports: {
    [mainnet.id]: http("https://mainnet.example.com"),
    [sepolia.id]: http("https://sepolia.example.com"),
    // [okxNet.id]: http("https://exchainrpc.okex.org"),
    //todo 这个有什么用
  },
});
