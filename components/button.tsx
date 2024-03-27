import React, { useEffect } from "react";
import { injected } from "@wagmi/core";
import { useConnect } from "wagmi";
import { config } from "@/config";
import { useChainId } from "wagmi";
interface ButtonProps {}
const Button: React.FC<ButtonProps> = (props) => {
  const {} = props;
  const { connect } = useConnect({ config });
  const chainId = useChainId();
  useEffect(() => {
    console.log(chainId);
  }, [chainId]);
  return (
    <div>
      <button
        onClick={() => connect({ connector: injected() })}
      >
        hhh
      </button>
    </div>
  );
};
export default Button;
