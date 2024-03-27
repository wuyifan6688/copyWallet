"use client";
import React from "react";
import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { WagmiProvider } from "wagmi";
import { useConnect } from "wagmi";
import { injected } from "@wagmi/core";
import { metaMask } from "wagmi/connectors";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Button from "@/components/button";
import { config } from "@/config";
interface TestProps {}

const queryClient = new QueryClient();
const Test: React.FC<TestProps> = (props) => {
  const {} = props;

  return (
    <div>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <Button></Button>
        </QueryClientProvider>
      </WagmiProvider>{" "}
    </div>
  );
};
export default Test;
