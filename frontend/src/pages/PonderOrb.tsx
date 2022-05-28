import { Box, Button, Group, MediaQuery, Select } from "@mantine/core";

import React from "react";
import { WrongChainAlert } from "../components/WrongChainAlert";
import { ponderOrb } from "../store/actions";
import { useContract } from "../hooks/useContract.hook";
import { useWeb3Status } from "../hooks/web3.hook";

export const PonderOrb = () => {
  const { isConnected } = useWeb3Status();
  const contract = useContract();

  const ponderOrbOnCLick = () => {
    if (contract) {
      ponderOrb(contract);
    }
  };

  return (
    <>
      <WrongChainAlert />
      <Group
        position="center"
        mt={50}
        sx={{ position: "relative", zIndex: 100 }}
      >
        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
          <Box pt={20}>Will</Box>
        </MediaQuery>
        <Select
          label="Currency"
          defaultValue="BTC"
          data={[
            { value: "BTC", label: "BTC" },
            { value: "ETH", label: "ETH" },
            { value: "BNB", label: "BNB" },
            { value: "LUNA", label: "LUNA" },
            { value: "SOL", label: "SOL" },
            { value: "ADA", label: "ADA" },
            { value: "AVAX", label: "AVAX" },
            { value: "DOT", label: "DOT" },
            { value: "DOGE", label: "DOGE" },
            { value: "SHIB", label: "SHIB" },
          ]}
        />
        <Select
          label="Does"
          defaultValue="Goes up"
          data={[
            { value: "Goes up", label: "Goes up" },
            { value: "Goes down", label: "Goes down" },
          ]}
        />
        <Select
          label="When"
          defaultValue="Today"
          data={[
            { value: "Today", label: "Today" },
            { value: "Tomorrow", label: "Tomorrow" },
            { value: "Next Week", label: "Next Week" },
            { value: "Next Year", label: "Next Year" },
          ]}
        />
        <Button mt={28} onClick={ponderOrbOnCLick}>
          Ponder Orb
        </Button>
      </Group>
    </>
  );
};
