import { defineChain } from "viem";

export const okxNet = defineChain({
  id: 66,
  name: "Ethereum",
  nativeCurrency: {
    name: "OKT",
    symbol: "OKT",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["https://exchainrpc.okex.org"] },
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://etherscan.io",
    },
  },
});
