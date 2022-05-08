import { AddEthereumChainParameter } from "@web3-react/types";

const MATIC: AddEthereumChainParameter["nativeCurrency"] = {
  name: "Matic",
  symbol: "MATIC",
  decimals: 18,
};

export const CHAINS: {
  [name: string]: AddEthereumChainParameter;
} = {
  POLYGON: {
    chainId: 137,
    chainName: "Polygon Mainnet",
    nativeCurrency: MATIC,
    blockExplorerUrls: ["https://polygonscan.com"],
    rpcUrls: ["https://polygon-rpc.com/"],
  },
  MUMBAI: {
    chainId: 80001,
    chainName: "Polygon Mumbai",
    nativeCurrency: MATIC,
    blockExplorerUrls: ["https://mumbai.polygonscan.com"],
    rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
  },
};

export const CORRECT_CHAIN = CHAINS.POLYGON;
