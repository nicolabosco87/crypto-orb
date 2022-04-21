import { ethers } from "ethers";
import { proxy } from "valtio";

export type TOrbStatus = "in" | "out" | "idle";
export type TCurrentPage = "ponder" | "about";
export interface IStore {
  status: TOrbStatus;
  result?: string;
  currentPage: TCurrentPage;
  web3: {
    isCorrectChain?: boolean;
    autoloaded?: boolean;
    instance?: any;
    provider?: ethers.providers.Web3Provider;
    signer?: ethers.providers.JsonRpcSigner;
    account?: string;
    contract?: ethers.Contract;
  };
}

export const store = proxy<IStore>({
  status: "idle",
  currentPage: "ponder",
  web3: {
    autoloaded: false,
  },
});
