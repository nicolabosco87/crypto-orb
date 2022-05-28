// import { hooks, metaMask } from "../connectors/metaMask";

import { hooks, network } from "../connectors/network";

import { CORRECT_CHAIN } from "../conf";
import { useEffect } from "react";

const { useChainId, useAccounts, useError, useIsActivating, useIsActive } =
  hooks;

/**
 * Get current web3 connection status/infos
 * @returns
 */
export const useWeb3Status = () => {
  const chainId = useChainId();
  const accounts = useAccounts();
  const error = useError();
  const isActivating = useIsActivating();
  const isActive = useIsActive();

  // attempt to connect eagerly on mount
  useEffect(() => {
    void network.activate();
  }, []);

  return {
    isConnected: chainId === CORRECT_CHAIN.chainId && isActive,
    isCorrectChain: chainId === CORRECT_CHAIN.chainId,
    chainId,
    accounts,
    error,
    isActivating,
    isActive,
  };
};
