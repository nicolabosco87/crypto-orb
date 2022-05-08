import { Alert } from "@mantine/core";
import { AlertCircle } from "tabler-icons-react";
import React from "react";
import { useWeb3Status } from "../hooks/web3.hook";

/**
 * Show wrong chain alert if happens
 * @returns
 */
export const WrongChainAlert = () => {
  const { isActive, isCorrectChain } = useWeb3Status();

  return isActive && isCorrectChain === false ? (
    <Alert
      icon={<AlertCircle size={16} />}
      title="Wrong Network!"
      color="red"
      mt={50}
    >
      Please change network into Polygon.
    </Alert>
  ) : null;
};
