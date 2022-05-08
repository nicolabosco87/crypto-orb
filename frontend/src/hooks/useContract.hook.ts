import { Contract, ethers } from "ethers";
import { useEffect, useState } from "react";

import TokenArtifact from "../contracts/CryptoOrb.json";
import contractAddress from "../contracts/contract-address.json";
import { hooks } from "../connectors/metaMask";
import { useWeb3Status } from "./web3.hook";

const { useProvider } = hooks;

/**
 * Get contract if user correctly connected
 * @returns Contract
 */
export const useContract = () => {
  const [contract, setcontract] = useState<Contract>();

  const { isConnected } = useWeb3Status();
  const provider = useProvider();

  useEffect(() => {
    if (isConnected) {
      const signer = provider?.getSigner();

      setcontract(
        new ethers.Contract(contractAddress.Token, TokenArtifact.abi, signer)
      );
    }
  }, [isConnected, provider]);

  return contract;
};
