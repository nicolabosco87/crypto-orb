// @ts-ignore

import { useCallback, useEffect, useMemo } from "react";

import TokenArtifact from "../contracts/CryptoOrb.json";
import { WEB_CORRECT_CHAIN } from "../conf";
import Web3Modal from "web3modal";
import contractAddress from "../contracts/contract-address.json";
import { ethers } from "ethers";
import { store } from "../store/store";
import { useSnapshot } from "valtio";

/**
 * Web3Modal Init
 */
(window as any).web3Modal = new Web3Modal({
  network: "rinkeby", // optional
  cacheProvider: true, // optional
  //   providerOptions, // required
});

/**
 * Get the web3modal instance
 * @returns
 */
export const useWeb3Modal = (): Web3Modal | undefined => {
  return (window as any).web3Modal;
};

/**
 * get the web3Modal init hook
 * @returns
 */
export const useInitWeb3 = () => {
  const { web3 } = useSnapshot(store);
  const autoloaded = web3?.autoloaded;
  const web3Modal = useWeb3Modal();

  // the main function that connects into web3/launches web3Modal
  const connectModal = useCallback(async () => {
    if (!web3Modal) return;

    const instance = await web3Modal.connect();

    // instance.on("accountsChanged", (accounts: any) => {
    //   console.log(accounts[0] || "");
    // });

    // provider = new Web3Provider(instance);
    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();
    const accounts = await provider.listAccounts();

    // Subscribe to accounts change
    // instance.on("accountsChanged", (accounts: string[]) => {
    //   console.log("accountsChanged", accounts);
    // });

    // Subscribe to chainId change
    instance.on("chainChanged", (chainId: { chainId: string }) => {
      store.web3.isCorrectChain = String(chainId) === WEB_CORRECT_CHAIN;
    });

    // Subscribe to provider connection
    // instance.on("connect", (info: { chainId: number }) => {
    //   console.log("connect", info);
    // });

    // Subscribe to provider disconnection
    instance.on("disconnect", (error: { code: number; message: string }) => {
      // console.log("disconnect", error);
      store.web3.account = undefined;
      store.web3.instance = undefined;
      store.web3.provider = undefined;
      store.web3.signer = undefined;
      store.web3.isCorrectChain = undefined;
      store.web3.contract = undefined;
    });

    store.web3.account = accounts[0];
    store.web3.instance = instance;
    store.web3.provider = provider;
    store.web3.signer = signer;
    store.web3.isCorrectChain = instance.chainId === WEB_CORRECT_CHAIN;

    store.web3.contract = new ethers.Contract(
      // process.env.CONTRACT_TOKEN ?? "",
      contractAddress.Token,
      TokenArtifact.abi,
      signer
    );
  }, [web3Modal]);

  // Logout from web3 Modal
  const logoutOfWeb3Modal = useCallback(async () => {
    if (!web3Modal) return;
    await web3Modal.clearCachedProvider();
    window.location.reload();
  }, [web3Modal]);

  // If autoLoad is enabled and the the wallet had been loaded before, load it automatically now.
  useEffect(() => {
    if (!web3Modal) return;
    if (!autoloaded && web3Modal.cachedProvider) {
      connectModal();
    }
    store.web3.autoloaded = true;
  }, [autoloaded, connectModal, web3Modal]);

  return { connectModal, logoutOfWeb3Modal };
};
