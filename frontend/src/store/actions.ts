import { TCurrentPage, store } from "./store";

import { Contract } from "ethers";

/**
 * Ponder orb and set the result
 */
export const ponderOrb = async (contract: Contract) => {
  let delay = 0;
  if (store.result) {
    store.status = "out";
    delay = 1000;
  }

  const result = await contract.getRandom();

  setTimeout(() => {
    store.result = result;
    store.status = "in";
  }, delay);
};

/**
 * Set current page
 */
export const setPage = (page: TCurrentPage) => {
  store.currentPage = page;
};
