import { Network } from "@web3-react/network";
import { URLS } from "../conf";
import { initializeConnector } from "@web3-react/core";

/**
 * Exports Network connector
 */
export const [network, hooks] = initializeConnector<Network>(
  (actions) => new Network(actions, URLS),
  Object.keys(URLS).map((chainId) => Number(chainId))
);
