import { hooks, metaMask } from "../connectors/metaMask";

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
    void metaMask.connectEagerly();
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

/**
 * Connect to web3 function
 */
export const useWeb3Connect = () => {
  return () => metaMask.activate(CORRECT_CHAIN);
};

/**
 * Disconnect from web3 function
 */
export const useWeb3Disconnect = () => {
  return () => metaMask.deactivate();
};
